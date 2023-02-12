<?php
/**
// ===================================================
// FlashQ by Christian Hackert and Gernot Braehler
// ===================================================
// PHP back-end.
// @author		Christian Hackert <www.hackert.biz/flashq>
// @version		FlashQ version: 1.0
// ===================================================
 */

// default email address (optional)
define('EXPORT_MAIL', 'dtdangpham@gmail.com');

// export directory, which must be writable (optional)
define('EXPORT_DIR', dirname(__FILE__).'/data/');

// define status
define('STATUS_OK',					1);
define('STATUS_LOGIN_FAILED',		-1);
define('STATUS_EXPORT_FAILED',		-2);

// ===================================================

// disable cache
if(!headers_sent()) {
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // expired in a past
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); // always modified
	header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
	header("Cache-Control: post-check=0, pre-check=0", false); // HTTP/1.1
	header("Pragma: no-cache"); // HTTP/1.0
}

// get action
$do = isset($_REQUEST['do']) ? strtolower($_REQUEST['do']) : NULL;

// ===================================================
// LOGIN
// @param	int	uid		User-id
// @return	int	uid		User-id
// @return	str	status	Status (1=ok)
// ===================================================

if($do == 'login') {

	// get uid
	$uid = isset($_REQUEST['uid']) ? trim($_REQUEST['uid']) : null;

	// list of valid user-ids (ids can be stored in a array, a file or in a database)
	$users = array('1000', '1001');

	// user validation
	if (in_array($uid, $users)) {
		$status = STATUS_OK;
	} else {
		$status = STATUS_LOGIN_FAILED;
	}

	// print return
	echo 'uid='.urlencode($uid).'&status='.$status;

// ===================================================
// SAVE or MAIL
// @param	int	uid		User-id
// @param	str	sort		Values assigned for each statement
// @param	int	npos		Number of positive statments
// @param	int	nneu		Number of neutral statements
// @param	int	nneg		Number of negativ statements
// @param	int	dur0		Required time in seconds (total)
// @param	str	name		Name of the study plus statement-version
// @return	int	sid		Sort-id
// @return	str	status	Status (1=ok)
// ===================================================

} else if($do == 'save' || $do == 'mail') {

	// get data
	$name 			= isset($_REQUEST['name']) ? $_REQUEST['name'] : null;
	$mailto 		= isset($_REQUEST['mailto']) ? $_REQUEST['mailto'] : (defined('EXPORT_MAIL') && EXPORT_MAIL!='' ? EXPORT_MAIL : NULL);

	$d 				= array();
	$d['sid'] 		= null;
	$d['uid'] 		= isset($_REQUEST['uid']) ? str_replace(array(';', '"', '\''), NULL, trim($_REQUEST['uid'])) : null;
	$d['sort'] 		= isset($_REQUEST['sort']) ? str_replace('_', ' ', $_REQUEST['sort']) : null;
	$d['npos'] 		= isset($_REQUEST['npos']) ? (int)$_REQUEST['npos'] : 0;
	$d['nneu'] 		= isset($_REQUEST['nneu']) ? (int)$_REQUEST['nneu'] : 0;
	$d['nneg'] 		= isset($_REQUEST['nneg']) ? (int)$_REQUEST['nneg'] : 0;

	foreach(array_reverse($_REQUEST) as $k=>$v) {
		if(preg_match('/^(form|comment)[0-9]{1,3}$/', $k)) {
			$d[$k] = str_replace(array(';', "\n", "\r"), array('.', "\\n", "\\r"), trim($v));
		}
	}

	$d['dur0']		= isset($_REQUEST['dur0']) ? (int)$_REQUEST['dur0'] : 0;
	$d['dur1']		= isset($_REQUEST['dur1']) ? (int)$_REQUEST['dur1'] : 0;
	$d['dur2']		= isset($_REQUEST['dur2']) ? (int)$_REQUEST['dur2'] : 0;
	$d['dur3']		= isset($_REQUEST['dur3']) ? (int)$_REQUEST['dur3'] : 0;
	$d['dur4']		= isset($_REQUEST['dur4']) ? (int)$_REQUEST['dur4'] : 0;
	$d['dur5']		= isset($_REQUEST['dur5']) ? (int)$_REQUEST['dur5'] : 0;
	$d['datetime'] 	= date('Y-m-d H:i:s');

	$status = STATUS_EXPORT_FAILED;

	// save data
	if($do == 'save') {
		
		// sort-id
		$d['sid'] = !empty($d['uid']) ? substr($d['uid'], 0, 8) : date('mdhi'); // better: row id

		// filenname
		$filename = defined('EXPORT_DIR') ? EXPORT_DIR : dirname(__FILE__);
		$filename .= (substr($filename,-1) == '/' ? NULL : '/').(!empty($name) ? preg_replace(array('/ /', '/\./', '/([^a-zA-Z0-9_]+)/'), array('_', '_', NULL), $name) : 'data').'.csv';

		echo $filename;

		// open file
		if(!is_file($filename)) {
			$header = '';
		}
		$file = @fopen ($filename, 'a');

		// write file
		if($file) {
			foreach($d as $k=>$v) {
				if($k == 'sort') {
					$v = explode('|', $v);
					for($i=0; $i<count($v); $i++) {
						if(empty($v[$i])) continue;
						if(isset($header)) $header .= 's'.($i+1).';';
						$row .= $v[$i].';';
					}
					continue;
				}
				if(preg_match('/^form[0-9]{1,3}$/', $k)) {
					$v = explode('|', $v);
					for($i=0; $i<count($v); $i++) {
						if(isset($header) && count($v) > 1) {
							$header .= $k.'_'.($i+1).';';
						} else if(isset($header)) {
							$header .= $k.';';
						}
						$row .= $v[$i].';';
					}
					continue;
				}
				if(isset($header)) $header .= $k.';';
				$row .= $v.';';
			}

			if(isset($header)) @fwrite($file, $header."\r\n"); 
			if(@fwrite($file, $row."\r\n")) $status = STATUS_OK;
			
			fclose($file);
			if(isset($header)) @chmod ($filename, 0777);
		}
	}

	// send data via email
	if(defined('EXPORT_MAIL') && EXPORT_MAIL != '') {

		$mbody = '';
		$mbody .= 'Study: '.$name."\n";
		foreach($d as $k=>$v) {
			$mbody .= $k.': '.$v."\n";
		}

		$mbody .= "\n".'Record '.($do=='mail' || ($do=='save' && $status != STATUS_OK) ? 'NOT ' : null).'saved.'."\n";

		$mbody .= "\n".'------------------------------';
		$mbody .= "\n".'Mail generated by FlashQ/PHP';
		$mbody .= "\n".'------------------------------';

		$mheader  = 'From: "FlashQ" <'.EXPORT_MAIL.'>'."\r\n";
		$mheader .= 'MIME-Version: 1.0'."\r\n";
		$mheader .= 'Content-Type: text/plain; charset=iso-8859-1'."\r\n";
		$mheader .= 'Content-Transfer-Encoding: 8bit';

		if(@mail(EXPORT_MAIL, 'FlashQ / '.$name, $mbody, $mheader)) {
			$status = STATUS_OK;
		}
	}

	// print return
	echo 'sid='.$sid.'&status='.$status;
}
?>