// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-research-thrusts",
              title: "research thrusts",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/";
              },
            },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-grants",
              title: "grants",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/grants/";
              },
            },{id: "dropdown-tbs-hdr-faqs",
              title: "TBS HDR FAQs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tbs_hdr/";
              },
            },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-awards-amp-press",
          title: "awards &amp; press",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards-and-press/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-books",
              title: "books",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-collaborators",
              title: "collaborators",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/collaborators/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-phân-tích-dữ-liệu-hành-vi-bằng-ngôn-ngữ-r",
        
          title: "Phân tích dữ liệu hành vi bằng ngôn ngữ R",
        
        description: "Trong thời đại trí tuệ nhân tạo và học máy càng ngày càng phổ biến, các doanh nghiệp thường tập trung vào việc phân tích dữ liệu lớn, tổng hợp hàng trăm nghìn biến (variables/indicators) được thu thập tự động để đưa ra kết luận về một vấn đề gì đấy, mà dữ liệu liên quan đến tâm lý và hành vi truyền thống được thu thập thông qua khảo sát hay phỏng vấn đôi khi bị lu mờ, dù công dụng của loại dữ liệu này, nếu làm đúng, có thể mang lại lợi ích lớn trong việc hiểu thêm về một người nào đấy. Trong bài post này, mình sẽ sử dụng ngôn ngữ R để phân tích một bộ dữ liệu mẫu liên quan đến hành vi bảo mật thông tin của nhân viên một doanh nghiệp lớn ở TPHCM, nơi mình đã tư vấn nâng cấp hệ thống bảo mật thông tin từ năm 2014.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/phan-tich-du-lieu-hanh-vi-bang-ngon-ngu-r/";
          
        },
      },{id: "post-báo-cáo-avpi-nâng-cao-năng-lực-số-tác-động-và-hàm-ý-chính-sách-từ-một-nghiên-cứu-ở-việt-nam",
        
          title: "Báo cáo AVPI: Nâng cao năng lực số – Tác động và hàm...",
        
        description: "Báo cáo &quot;Nâng cao năng lực số – Tác động và hàm ý chính sách từ một nghiên cứu ở Việt Nam&quot;, do Duy và nhóm nghiên cứu Chuyển đổi số tại Khoa Kinh doanh, RMIT Vietnam, đã được đăng tải lên trang web của Viện Chính sách Australia Vietnam (AVPI).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/bao-cao-nang-luc-so-viet-nam/";
          
        },
      },{id: "post-chuyển-đổi-số-lấy-hệ-sinh-thái-làm-trọng-tâm",
        
          title: "Chuyển đổi số lấy hệ sinh thái làm trọng tâm",
        
        description: "Hưởng ứng Ngày Chuyển đổi số quốc gia (10/10/2023), tôi thảo luận về câu chuyện chuyển đổi số từ góc nhìn của doanh nghiệp siêu nhỏ, nhỏ, và vừa (MSME) và đưa ra một số khuyến nghị chiến lược liên quan đến hướng tiếp cận chuyển đổi số lấy hệ sinh thái làm trọng tâm qua bài viết này. Bài viết này đã được đăng trên một số trang báo điện tử tại Việt Nam.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chuyen-doi-so-huong-den-he-sinh-thai-lam-trong-tam/";
          
        },
      },{id: "post-ứng-dụng-chatgpt-cho-doanh-nghiệp-vừa-và-nhỏ-smes-tại-bến-tre-2023",
        
          title: "Ứng dụng ChatGPT cho doanh nghiệp vừa và nhỏ (SMEs) tại Bến Tre...",
        
        description: "It was an honour to receive the invitation to share my thoughts about another trending topic - the applications of ChatGPT for SMEs—with provincial leaders, the Department of I&amp;C, and delegates who are SME owners in Ben Tre province.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chatgpt-ben-tre/";
          
        },
      },{id: "post-chiến-lược-chuyển-đổi-số-cho-doanh-nghiệp-vừa-và-nhỏ-smes-tại-quảng-ngãi-2023",
        
          title: "Chiến lược chuyển đổi số cho doanh nghiệp vừa và nhỏ (SMEs) tại...",
        
        description: "Tham gia với vai trò diễn giả trong Tuần lễ Chuyển đổi số tỉnh Quảng Ngãi 2023, mình lại chia sẻ về đề tài chiến lược số hóa cho doanh nghiệp siêu nhỏ, nhỏ và vừa. *Lộ trình*, *năng lực tổ chức*, và *tư duy số của chủ doanh nghiệp* là những trụ cột mình xoáy vào.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chuyen-doi-so-quang-ngai-2023/";
          
        },
      },{id: "post-tập-huấn-chuyển-đổi-số-cho-smes-tại-bình-phước",
        
          title: "Tập huấn Chuyển đổi số cho SMEs tại Bình Phước",
        
        description: "Lần thứ hai trở lại Bình Phước để tập huấn về chuyển đổi số (CĐS) cho người dân, chính quyền, và doanh nghiệp, team của tụi mình thu hút được tới hơn bốn ngàn người. Cũng trong lần tập huấn này, chính quyền tỉnh đưa ra yêu cầu nội dung tập trung vào CĐS cho doanh nghiệp vừa và nhỏ (SMEs). Nhìn vào các điển dụ CĐS “chuẩn chỉnh” trong sách tham khảo thì khó mà hình dung được các SMEs sẽ có thể làm mới mô hình kinh doanh với công nghệ số như thế nào theo đúng định nghĩa của CĐS.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/chuyen-doi-so-sme-binh-phuoc-2022/";
          
        },
      },{id: "post-full-scholarships-for-phd-research-in-digital-transformation-and-cybersecurity-management-areas-at-rmit-vietnam",
        
          title: "Full scholarships for PhD research in digital transformation and cybersecurity management areas at...",
        
        description: "My research collaborators and I are calling for applications for five (5) PhD projects which will be fully funded by scholarships (covering tuition fee, living stipend, and a AUD $3,000 allowance for research activities). Details of the projects are provided in this post.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/phd-scholarship-at-rmit-vietnam/";
          
        },
      },{id: "post-chuyển-đổi-số-và-nghịch-lý",
        
          title: "Chuyển đổi số và nghịch lý",
        
        description: "Một câu hỏi mà cho đến nay vẫn chưa có kết luận cuối cùng - &quot;Chuyển đổi số (digital transformation) khác với triển khai IT (IT implementation) như thế nào?&quot; Bên cạnh các câu trả lời được đồng ý rộng rãi, còn một vấn đề thú vị mà lại nhận được ít thảo luận hơn - sự nghịch lý (paradox) trong chuyển đổi số.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/chuyen-doi-so-va-nghich-ly/";
          
        },
      },{id: "post-chia-sẻ-mùa-lễ-cuối-năm-2021",
        
          title: "Chia sẻ mùa lễ cuối năm 2021",
        
        description: "Sau 6 tháng &quot;từ quan&quot; làm Senior Program Manager/SPM (mà tôi hay gọi đùa là &quot;Siêu Phô Mai&quot;) ở khoa cũ, thì bắt đầu từ 1.1.2022 tôi sẽ trở lại với một vị trí SPM khác ở khoa hiện tại. Theo mô tả công việc của vị trí này, tôi sẽ quản lý các vấn đề liên quan đến các chương trình đào tạo Tiến sỹ (PhD) ở trường tôi, bao gồm hỗ trợ nghiên cứu sinh PhD và giáo sư hướng dẫn, cũng như đóng góp ý kiến trực tiếp vào đường hướng và chiến lược nghiên cứu của khoa. Đây cũng là vị trí management/leadership thứ hai của tôi, kể từ khi tôi bắt đầu sự nghiệp academic của mình từ 3 năm trước.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/chia-se-mua-le-cuoi-nam-2021/";
          
        },
      },{id: "post-tổng-quan-về-trải-nghiệm-thuật-toán-ax",
        
          title: "Tổng quan về trải nghiệm thuật toán (AX)",
        
        description: "Trí tuệ nhân tạo đang ngày càng trở thành một phần không thể thiếu trong cuộc sống hàng ngày với nhiều hình thức khác nhau - từ hệ thống đề xuất thương mại điện tử đến dịch vụ đề xuất phim, từ dịch vụ tổng hợp nội dung đến hệ thống hướng dẫn lộ trình. Mặc dù việc áp dụng nhanh chóng các công nghệ thuật toán có khả năng cải thiện trải nghiệm của người dùng một cách đáng kể, nhưng việc người dùng chấp nhận những đề xuất này như thế nào vẫn còn là một ẩn số. Nói cách khác, những yếu tố nào sẽ ảnh hưởng đến sự hài lòng của chúng ta khi sử dụng các thuật toán đề xuất này? Và làm thế nào chúng ta có thể cải thiện “trải nghiệm thuật toán” (AX) của người dùng?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/tong-quan-trai-nghiem-thuat-toan/";
          
        },
      },{id: "post-tôi-đi-phỏng-vấn-senior-lecturer",
        
          title: "Tôi đi phỏng vấn Senior Lecturer",
        
        description: "Sau ba năm làm việc trong vị trí Giảng viên (Lecturer) kiêm Chủ nhiệm bộ môn cấp cao (Senior Program Manager), tôi quyết định ứng tuyển vị trí Giảng viên chính/ Giảng viên cấp cao (Senior Lecturer). Senior Lecturer là vị trí &quot;bước đệm&quot; để sau đó, từ vị trí này tôi sẽ ứng tuyển vào vị trí Giáo sư dự bị (Associate Professor), và cuối cùng sẽ là Giáo sư thực thụ (Full Professor).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/phong-van-senior-lecturer/";
          
        },
      },{id: "post-analyzing-apple-health-data",
        
          title: "Analyzing Apple Health data",
        
        description: "As I thought that I should care more about my health, I bought a treadmill and after two months of regular running and walking on the treadmill, I lost 7 kgs. I used Apple Watch (Series 3 - not very accurate in fitness tracking based on what I have read) to keep track of my workouts and the Xiaomi Smart Scale 2 for measuring weights and other physical metrics, and all these data are synced and stored in the Apple&#39;s Health app on iPhone. Although the Health app provides useful analyses and visualizations of these data, we can export and analyze the data by using Python as well.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/analyze-apple-health-data/";
          
        },
      },{id: "post-an-overview-of-algorithmic-experience-ax",
        
          title: "An overview of Algorithmic Experience (AX)",
        
        description: "Artificial intelligence has been increasingly becoming an integral part of everyday life through a wide variety of implementations, such as e-commerce recommender systems, movie recommendations, tailored content aggregation services or navigation systems. While the rapid adoption of algorithm technologies has the potential to greatly improve users’ experience and increase services, it is still unclear how users cognitively accept such recommender systems. In other words, what factors affect our satisfaction and adoption of these algorithm recommender systems? And how could we improve users’ algorithmic experience?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/overview-of-algorithmic-experience/";
          
        },
      },{id: "post-streamlit-for-data-app",
        
          title: "Streamlit for data app",
        
        description: "For data scientists and machine learning engineers who use Python, streamlit provides an easy-to-use and intuitive framework for creating data apps.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/streamlit-for-data-app/";
          
        },
      },{id: "books-the-almanack-of-naval-ravikant",
          title: 'The Almanack of Naval Ravikant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/almanack_of_naval_ravikant/";
            },},{id: "books-the-psychology-of-money",
          title: 'The Psychology of Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/psychology_of_money/";
            },},{id: "books-rebooting-ai",
          title: 'Rebooting AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rebooting_ai/";
            },},{id: "books-superintelligence",
          title: 'Superintelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/superintelligence/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-your-next-five-moves",
          title: 'Your Next Five Moves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/your_next_five_moves/";
            },},{id: "news-i-was-appointed-lecturer-of-information-technology-in-the-school-of-science-amp-amp-technology-in-rmit-university-vietnam",
          title: 'I was appointed Lecturer of Information Technology in the School of Science &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-i-completed-ph-d-degree-from-rmit-university-in-australia",
          title: 'I completed Ph.D. degree from RMIT University in Australia.',
          description: "",
          section: "News",},{id: "news-i-received-a-scholarship-to-complete-the-graduate-certificate-in-digital-tertiary-learning-amp-amp-teaching-from-rmit-vietnam",
          title: 'I received a scholarship to complete the Graduate Certificate in Digital Tertiary Learning...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-panelist-at-the-international-vietnamese-academic-network-ivanet-event-on-publishing-high-quality-journal-articles-for-young-scholars",
          title: 'I will be a panelist at the International Vietnamese Academic Network (iVANet) event...',
          description: "",
          section: "News",},{id: "news-my-ph-d-candidate-ngan-truong-received-1st-runner-up-prize-from-the-rmit-vietnam-s-three-minute-thesis-3mt-competition",
          title: 'My Ph.D. candidate (Ngan Truong) received 1st Runner-Up prize from the RMIT Vietnam’s...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-keynote-speaker-at-the-acca-event-on-applications-of-artificial-intelligence-in-accounting-and-finance",
          title: 'I will be a keynote speaker at the ACCA event on applications of...',
          description: "",
          section: "News",},{id: "news-i-received-the-teaching-and-research-awards-from-the-school-of-science-amp-amp-technology",
          title: 'I received the teaching and research awards from the School of Science &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-i-will-presented-about-user-centred-design-for-startups-at-the-event-hosted-by-rmit-activator",
          title: 'I will presented about user-centred design for startups at the event hosted by...',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-about-research-careers-for-young-scholars-featured-on-htv7-a-national-tv-channel-in-vietnam",
          title: 'I was interviewed about research careers for young scholars, featured on HTV7 -...',
          description: "",
          section: "News",},{id: "news-i-presented-about-applications-of-artificial-intelligence-in-healthcare-at-oxford-university-clinical-research-unit-oucru-at-hospital-for-tropical-diseases-in-vietnam",
          title: 'I presented about applications of artificial intelligence in healthcare at Oxford University Clinical...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-associate-track-chair-for-the-information-security-amp-amp-privacy-track-of-pacis-2020-in-dubai",
          title: 'I was appointed Associate Track Chair for the “Information Security &amp;amp;amp; Privacy” track...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-track-chair-for-cybersecurity-track-in-the-rivf-2020-conference",
          title: 'I was appointed Track Chair for Cybersecurity track in the RIVF 2020 conference....',
          description: "",
          section: "News",},{id: "news-i-was-appointed-stream-lead-data-science-amp-amp-artificial-intelligence-in-the-school-of-science-amp-amp-technology",
          title: 'I was appointed Stream Lead (Data Science &amp;amp;amp; Artificial Intelligence) in the School...',
          description: "",
          section: "News",},{id: "news-i-received-a-teaching-award-from-the-school-of-science-amp-amp-technology",
          title: 'I received a teaching award from the School of Science &amp;amp;amp; Technology.',
          description: "",
          section: "News",},{id: "news-i-received-2-internal-research-grants-from-rmit-vietnam",
          title: 'I received 2 internal research grants from RMIT Vietnam.',
          description: "",
          section: "News",},{id: "news-i-will-be-a-keynote-speaker-at-the-2nd-international-conference-in-economics-business-and-tourism-hosted-by-international-university-in-vietnam",
          title: 'I will be a keynote speaker at the 2nd International Conference in Economics,...',
          description: "",
          section: "News",},{id: "news-i-received-an-award-for-research-activities-from-the-school-of-science-amp-amp-technology",
          title: 'I received an award for research activities from the School of Science &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-i-received-3-recognition-of-outstanding-student-experience-rose-awards-from-the-stem-college-rmit-university",
          title: 'I received 3 Recognition of Outstanding Student Experience (ROSE) awards from the STEM...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-senior-program-manager-software-engineering-amp-amp-it-in-the-school-of-science-amp-amp-technology",
          title: 'I was appointed Senior Program Manager (Software Engineering &amp;amp;amp; IT) in the School...',
          description: "",
          section: "News",},{id: "news-i-spearheaded-the-launch-of-the-new-bachelor-of-it-program-in-hanoi",
          title: 'I spearheaded the launch of the new Bachelor of IT program in Hanoi....',
          description: "",
          section: "News",},{id: "news-i-will-be-an-external-panelist-for-ph-d-defense-hosted-by-international-university-vietnam",
          title: 'I will be an external panelist for Ph.D. defense hosted by International University,...',
          description: "",
          section: "News",},{id: "news-my-undergraduate-student-bao-le-had-paper-accepted-for-publication-in-the-rivf-2020-proceeding",
          title: 'My undergraduate student (Bao Le) had paper accepted for publication in the RIVF...',
          description: "",
          section: "News",},{id: "news-my-ph-d-candidate-minh-bui-had-paper-accepted-for-publication-in-the-rivf-2020-proceeding",
          title: 'My Ph.D. candidate (Minh Bui) had paper accepted for publication in the RIVF...',
          description: "",
          section: "News",},{id: "news-i-was-the-external-reviewer-for-textbooks-on-artificial-intelligence-for-high-school-students-in-vietnam-a-project-of-vietnam-national-university",
          title: 'I was the external reviewer for textbooks on artificial intelligence for high school...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-panelist-at-trg-international-s-virtual-seminar-about-artificial-intelligence-in-supply-chains",
          title: 'I will be a panelist at TRG International’s virtual seminar about artificial intelligence...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-panelist-at-techfest-2020-a-national-event-on-frontier-technologies-in-vietnam",
          title: 'I will be a panelist at TechFest 2020 - a national event on...',
          description: "",
          section: "News",},{id: "news-i-spearheaded-the-launch-of-4-new-courses-on-cloud-technologies-as-part-of-partnership-with-aws",
          title: 'I spearheaded the launch of 4 new courses on cloud technologies as part...',
          description: "",
          section: "News",},{id: "news-i-received-best-paper-award-1st-runner-up-at-acis-2020-for-research-on-digital-transformation",
          title: 'I received Best Paper Award (1st Runner-Up) at ACIS 2020 for research on...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-capstone-project-coordinator-and-organized-capstone-project-showcase-for-final-year-students-in-the-school-of-science-amp-amp-technology",
          title: 'I was appointed Capstone Project Coordinator and organized Capstone Project Showcase for final...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-associate-track-chair-for-the-social-media-and-digital-collaboration-track-of-the-2021-international-conference-on-information-systems-icis-2021-in-austin-texas",
          title: 'I was appointed Associate Track Chair for the “Social Media and Digital Collaboration”...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-section-editor-for-australasian-journal-of-information-systems-abdc-a-ranked-q2",
          title: 'I was appointed Section Editor for Australasian Journal of Information Systems (ABDC A-ranked,...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-senior-lecturer-of-business-innovation-in-the-school-of-business-amp-amp-management",
          title: 'I was appointed Senior Lecturer of Business Innovation in the School of Business...',
          description: "",
          section: "News",},{id: "news-i-received-the-2021-living-rmit-values-award",
          title: 'I received the 2021 Living RMIT Values award.',
          description: "",
          section: "News",},{id: "news-i-co-founded-the-vietnam-chapter-of-the-association-for-information-systems-vais-https-vn-ais-org",
          title: 'I co-founded the Vietnam Chapter of the Association for Information Systems (VAIS) https://vn-ais.org/...',
          description: "",
          section: "News",},{id: "news-i-co-edited-the-springer-book-titled-information-systems-research-in-vietnam-volume-1-https-vn-ais-org-infosys-research-in-vietnam-book",
          title: 'I co-edited the Springer book titled “Information Systems Research in Vietnam Volume 1”...',
          description: "",
          section: "News",},{id: "news-together-with-my-rmit-vietnam-colleague-dr-abdul-rohman-and-research-collaborators-in-other-institutions-we-have-successfully-secured-a-221-840-external-grant-from-the-vaccine-confidence-fund",
          title: 'Together with my RMIT Vietnam colleague, Dr. Abdul Rohman, and research collaborators in...',
          description: "",
          section: "News",},{id: "news-i-will-be-part-of-the-rmit-vietnam-expert-team-to-deliver-executive-training-on-digital-transformation-and-cybersecurity-management-for-vietnam-airlines",
          title: 'I will be part of the RMIT Vietnam expert team to deliver executive...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-share-that-i-m-starting-a-new-role-as-hdr-coordinator-in-the-school-of-business-amp-amp-management-at-rmit-vietnam-in-this-role-i-will-lead-and-mentor-both-ph-d-candidates-and-supervisors-to-pursue-the-university-s-hdr-priorities-and-contribute-to-developing-school-specific-hdr-strategies",
          title: 'I’m happy to share that I’m starting a new role as HDR Coordinator...',
          description: "",
          section: "News",},{id: "news-together-with-my-research-collaborators-at-rmit-vietnam-we-have-successfully-secured-a-10-150-external-grant-from-the-aus4skills-organisation",
          title: 'Together with my research collaborators at RMIT Vietnam, we have successfully secured a...',
          description: "",
          section: "News",},{id: "news-i-felt-honoured-and-pleased-to-present-the-topic-digital-transformation-methods-and-challenges-to-the-leaders-of-binh-phuoc-province-and-neighboring-provinces-such-as-binh-duong-and-dak-nong-as-well-as-to-business-leaders-at-the-conference-on-digital-transformation-which-was-co-hosted-by-binh-phuoc-provincial-people-s-committee-and-the-ministry-of-information-and-communications-of-vietnam",
          title: 'I felt honoured and pleased to present the topic “Digital transformation methods and...',
          description: "",
          section: "News",},{id: "news-i-will-lead-the-organisation-of-the-2022-research-methodology-workshops-together-with-prof-bob-baulch-for-phd-candidates-and-early-career-researchers-in-the-school-of-business-amp-amp-management-rmit-vietnam-the-event-will-take-place-from-may-23-to-may-26-including-a-panel-discussion-on-strategies-for-research-publications-joined-by-senior-researchers-in-diverse-disciplines-and-regions-and-six-workshops-on-research-methodologies-such-as-structural-equation-modelling-social-network-analysis-and-data-analytics-for-research-by-using-r",
          title: 'I will lead the organisation of the 2022 Research Methodology Workshops, together with...',
          description: "",
          section: "News",},{id: "news-i-will-be-part-of-the-rmit-vietnam-expert-team-to-deliver-an-executive-training-module-on-ai-and-digital-transformation-for-vietnam-education-officers-and-their-logistics-partners-commissioned-by-aus4skills",
          title: 'I will be part of the RMIT Vietnam expert team to deliver an...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-speaker-at-the-digitization-of-trust-seminar-organised-by-fulbright-university-vietnam-on-june-1-2022-https-yseali-fulbright-edu-vn-en-about-us-speakers-2022",
          title: 'I will be a speaker at the “Digitization of Trust” seminar organised by...',
          description: "",
          section: "News",},{id: "news-congratulations-to-my-phd-candidate-ngan-tuyet-truong-for-having-successfully-completed-her-phd-program",
          title: 'Congratulations to my PhD candidate, Ngan Tuyet Truong, for having successfully completed her...',
          description: "",
          section: "News",},{id: "news-my-research-team-has-received-the-d3-research-activity-funding-from-rmit-university-aud-5-000-for-digital-transformation-research",
          title: 'My research team has received the D3 Research Activity funding from RMIT University...',
          description: "",
          section: "News",},{id: "news-my-research-team-has-received-the-innovation-proof-of-concept-funding-from-rmit-university-aud-8-960-for-digital-transformation-research",
          title: 'My research team has received the Innovation Proof of Concept funding from RMIT...',
          description: "",
          section: "News",},{id: "news-i-will-deliver-an-online-workshop-on-advanced-structural-equation-modelling-for-staff-and-hdr-candidates-in-the-business-school-at-rmit-vietnam",
          title: 'I will deliver an online workshop on Advanced Structural Equation Modelling for staff...',
          description: "",
          section: "News",},{id: "news-i-will-take-part-in-the-national-conference-techfest-vietnam-2022-as-moderator-for-the-panel-discussion-on-digital-transformation-in-the-fnb-and-accommodation-industries",
          title: 'I will take part in the national conference TECHFEST Vietnam 2022 as Moderator...',
          description: "",
          section: "News",},{id: "news-i-will-be-publication-chair-for-the-2022-international-conference-on-business-innovation-at-rmit-vietnam",
          title: 'I will be Publication Chair for the 2022 International Conference on Business Innovation...',
          description: "",
          section: "News",},{id: "news-i-will-be-panelist-at-the-trg-international-webinar-about-erps-and-digital-transformation",
          title: 'I will be panelist at the TRG International webinar about ERPs and Digital...',
          description: "",
          section: "News",},{id: "news-i-will-be-keynote-speaker-at-the-2022-international-research-conference-resilience-by-technology-and-design-rtd-2022",
          title: 'I will be keynote speaker at the 2022 international research conference “Resilience by...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-panelist-for-the-online-de-entrepreneur-discussion-on-healthtech-trends-in-vietnam",
          title: 'I will be a panelist for the online De-Entrepreneur discussion on healthtech trends...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-panelist-for-the-online-de-entrepreneur-discussion-on-healthtech-trends-in-vietnam",
          title: 'I will be a panelist for the online De-Entrepreneur discussion on healthtech trends...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-track-chair-for-the-2023-acis-conference-in-wellington-new-zealand",
          title: 'I was appointed Track Chair for the 2023 ACIS conference in Wellington, New...',
          description: "",
          section: "News",},{id: "news-i-received-the-5-years-of-service-certificate-of-recognition-from-rmit-vietnam",
          title: 'I received the 5 Years of Service certificate of recognition from RMIT Vietnam....',
          description: "",
          section: "News",},{id: "news-i-was-delivering-a-workshop-on-digital-transformation-for-citizens-business-owners-and-government-officials-for-quang-ngai-province-in-vietnam",
          title: 'I was delivering a workshop on digital transformation for citizens, business owners, and...',
          description: "",
          section: "News",},{id: "news-i-was-delivering-a-workshop-on-chatgpt-applications-for-micro-sized-and-small-and-medium-enterprises-for-citizens-business-owners-and-government-officials-for-ben-tre-province-in-vietnam",
          title: 'I was delivering a workshop on ChatGPT applications for micro-sized and small-and-medium enterprises...',
          description: "",
          section: "News",},{id: "news-congratulations-to-my-phd-candidate-minh-bui-thi-hoang-for-having-successfully-completed-her-phd-program",
          title: 'Congratulations to my PhD candidate, Minh Bui Thi Hoang, for having successfully completed...',
          description: "",
          section: "News",},{id: "news-my-research-team-has-received-the-tier-2-2024-thematic-research-grant-aud-29-153-and-the-eip-platform-activity-funding-aud-3-000-from-rmit-university-for-digital-transformation-research-related-to-developing-intelligent-ai-chatbots-for-one-of-the-largest-hospitals-in-vietnam-and-for-the-restaurant-industry",
          title: 'My research team has received the Tier 2 2024 - Thematic Research Grant...',
          description: "",
          section: "News",},{id: "projects-gender-empowerment-in-education",
          title: 'Gender Empowerment in Education',
          description: "Gender Equality Across Industries (GEAI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-digital-competency-of-vietnamese-citizens",
          title: 'Digital Competency of Vietnamese Citizens',
          description: "Australian Vietnam Policy Institute (AVPI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-chatgpt-applications-for-smes",
          title: 'ChatGPT applications for SMEs',
          description: "Ben Tre Province",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-digital-transformation-strategies-for-smes",
          title: 'Digital Transformation Strategies for SMEs',
          description: "Quang Ngai Province",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-digital-transformation-trends-in-f-amp-b-industry",
          title: 'Digital Transformation Trends in F&amp;amp;B Industry',
          description: "TECHFEST 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-digital-transformation-strategies-for-smes",
          title: 'Digital Transformation Strategies for SMEs',
          description: "Dak Nong Province",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-digitization-of-trust",
          title: 'Digitization of Trust',
          description: "Fulbright University Vietnam",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-digital-transformation-strategies-for-smes",
          title: 'Digital Transformation Strategies for SMEs',
          description: "Binh Phuoc Province",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-frontier-technologies-and-future-of-work",
          title: 'Frontier Technologies and Future of Work',
          description: "TECHFEST 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-standards-based-digitalization-toolkit",
          title: 'Standards-based Digitalization Toolkit',
          description: "British Standards Institution (BSI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-generative-ai-for-managers",
          title: 'Generative AI for managers',
          description: "TTT Corporation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-asean-standards-framework-for-cross-border-e-commerce",
          title: 'ASEAN Standards Framework for Cross-border E-commerce',
          description: "British Standards Institution (BSI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_project/";
            },},{id: "projects-ai-and-automation-for-human-resources-hr",
          title: 'AI and automation for Human Resources (HR)',
          description: "PNJ Jewelry Production and Trading (PNJP)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_project/";
            },},{id: "projects-cybersecurity-incident-response-amp-decree-13",
          title: 'Cybersecurity Incident Response &amp;amp; Decree 13',
          description: "PPJ Group",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-digital-transformation-trends",
          title: 'Digital Transformation Trends',
          description: "Binh Duong City",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-information-security-governance",
          title: 'Information Security Governance',
          description: "EVN Finance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-information-security-governance-amp-decree-13",
          title: 'Information Security Governance &amp;amp; Decree 13',
          description: "Vietcombank",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-information-security-culture",
          title: 'Information Security Culture',
          description: "PPJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-information-security-risk-management",
          title: 'Information Security Risk Management',
          description: "Phu Hung Securities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-fostering-stem-talents",
          title: 'Fostering STEM Talents',
          description: "American Center HCMC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-ai-chatbot-for-healthcare",
          title: 'AI Chatbot for Healthcare',
          description: "University Medical Center Hospital",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%72.%64%75%79%64%61%6E%67%70%68%61%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dtdangpham", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7798-6635", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lkYFFvAAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.rmit.edu.vn/profiles/d/duy-dangphamthien", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
