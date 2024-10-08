---
layout: post
title: "Tổng quan về trải nghiệm thuật toán (AX)"
date: 2021-07-17 00:00:00-0700
description: Trí tuệ nhân tạo đang ngày càng trở thành một phần không thể thiếu trong cuộc sống hàng ngày với nhiều hình thức khác nhau - từ hệ thống đề xuất thương mại điện tử đến dịch vụ đề xuất phim, từ dịch vụ tổng hợp nội dung đến hệ thống hướng dẫn lộ trình. Mặc dù việc áp dụng nhanh chóng các công nghệ thuật toán có khả năng cải thiện trải nghiệm của người dùng một cách đáng kể, nhưng việc người dùng chấp nhận những đề xuất này như thế nào vẫn còn là một ẩn số. Nói cách khác, những yếu tố nào sẽ ảnh hưởng đến sự hài lòng của chúng ta khi sử dụng các thuật toán đề xuất này? Và làm thế nào chúng ta có thể cải thiện “trải nghiệm thuật toán” (AX) của người dùng?
tags: 
categories: commentary
toc:
  sidebar: left
---

Trí tuệ nhân tạo đang ngày càng trở thành một phần không thể thiếu trong cuộc sống hàng ngày với nhiều hình thức khác nhau: từ hệ thống đề xuất thương mại điện tử đến dịch vụ đề xuất phim, từ dịch vụ tổng hợp nội dung đến hệ thống hướng dẫn lộ trình. Mặc dù việc áp dụng nhanh chóng các công nghệ thuật toán có khả năng cải thiện trải nghiệm của người dùng một cách đáng kể, nhưng việc người dùng chấp nhận những đề xuất này như thế nào vẫn còn là một ẩn số. Nói cách khác, những yếu tố nào sẽ ảnh hưởng đến sự hài lòng của chúng ta khi sử dụng các thuật toán đề xuất này? Và làm thế nào chúng ta có thể cải thiện “trải nghiệm thuật toán” (AX) của người dùng?

### Vấn đề của trí tuệ nhân tạo (AI) từ góc nhìn của người dùng

Bằng cách phân tích hàng ngàn đánh giá của người dùng trên mạng xã hội bao gồm Facebook, Netflix và Google Maps, Eiband et al. (2019) đã khám phá rằng không chỉ độ chính xác mà sự tương tác giữa người dùng và hệ thống cũng ảnh hưởng đến trải nghiệm của họ. Một mặt, nghiên cứu này cho thấy các vấn đề liên quan đến thuật toán, như sự thiên vị trong hiển thị nội dung (Facebook), sự không phù hợp giữa đề xuất và sở thích của người dùng (Netflix) hoặc điểm đến được gợi ý không chính xác (Google Maps) là những vấn đề phổ biến của các hệ thống này. Mặt khác, người dùng có thể cảm thấy khó chịu khi họ không có quyền kiểm soát cách hệ thống hoạt động. Ví dụ, người dùng có thể cảm thấy khó chịu khi họ muốn đi tuyến đường ven biển trong chuyến du lịch của họ, nhưng Google Maps liên tục chuyển thành tuyến đường cao tốc mà không hề thông báo trước. Ngoài ra, cách các hệ thống phản hồi cho người dùng cũng rất quan trọng. Với hệ thống xếp hạng nhị phân (thích / không thích), người dùng có thể gặp khó khăn để cung cấp phản hồi cho Netflix, và điều này ảnh hưởng đến mức độ phù hợp của các gợi ý phim sau này.

Trước những vấn đề này, những nghiên cứu gần đây bắt đầu khám phá khái niệm “trải nghiệm thuật toán” (algorithmic experience – AX) (Alvarado & Waern 2018) – một khái niệm bao quát về tương tác của người dùng với các hệ thống thông minh. Khái niệm này bao gồm nỗ lực thúc đẩy khả năng kiểm soát của người dùng đối với việc ra quyết định của thuật toán, tăng cường nhận thức về cách thức hoạt động của hệ thống, và làm tăng lên hoặc giảm đi tầm ảnh hưởng của thuật toán trong việc ra quyết định.

### Trải nghiệm thuật toán (AX) và khả năng kiểm soát của người dùng

Vai trò của con người và khả năng giám sát hệ thống là một trong những chủ đề mới trong lĩnh vực này. Bằng cách cho phép người dùng chứng thực, quản lý và kiểm soát thuật toán, hệ thống có thể khiến người dùng cảm thấy được trao quyền và có khả năng quản lý những gì hệ thống nghĩ về họ (Alvarado & Waern 2018; Kumar et al. 2020). Theo khảo sát, 56% người dùng mong muốn có các tùy chọn để kiểm soát newsfeed của Facebook và tự lọc nội dung, bằng cách bật / tắt / điều chỉnh các chức năng như “People you may know” hay “Marketplace” chẳng hạn (Alvarado & Waern 2018). Cùng quan điểm đó, các nhà nghiên cứu đã đề xuất sự tham gia của con người trong quá trình thiết kế hệ thống AI. Tương tác với người dùng cuối trong quá trình phát triển hệ thống có thể cải thiện nhận thức của họ về sự công bằng và tin cậy của thuật toán, tăng nhận thức và hiểu biết về cách ra quyết định của thuật toán, từ đó có thể dẫn đến sự đồng cảm hơn (Lee et al. 2019).

### Trải nghiệm thuật toán (AX) và tính minh bạch

Những nghiên cứu gần đây đang bắt đầu tập trung vào tác động của sự minh bạch và công bằng của thuật toán lên người dùng, bao gồm cảm nghĩ, mức độ sử dụng, mức độ chấp nhận, sự hài lòng và ý định tiếp tục sử dụng của họ (Shin 2020; Shin, Zhong & Biocca 2020). Trong những nghiên cứu này, tính minh bạch liên quan đến cách hệ thống hiển thị những gì thuật toán biết về người dùng và giải thích lý do tại sao thuật toán lại đưa ra kết quả dựa trên hiểu biết đó (Alvarado & Waern 2018). Từ đó, trải nghiệm thuật toán của người dùng được cải thiện. Đồng quan điểm đó, mô hình vòng lặp phản hồi tin cậy của Shin (2020) cũng cho thấy rằng tính minh bạch và độ chính xác nhận thức sẽ đảm bảo niềm tin đối với thuật toán, từ đó tăng sự hài lòng của người dùng.

### Trải nghiệm thuật toán (AX) và nhận thức về thuật toán

Một nhánh nghiên cứu khác tập trung vào việc giúp người dùng hiểu được các hệ thống thông minh, ví dụ như thông qua các giải thích được trình bày bởi hệ thống. Các giải thích này thường nhắm vào quá trình ra quyết định hoặc một khuyến nghị cụ thể của thuật toán. Một mặt, một số tác giả đồng ý rằng các giải thích ảnh hưởng tích cực đến tính minh bạch (Brunk, Mattern & Riehle 2019). Mặt khác, các nhà nghiên cứu cho rằng hiệu quả của các giải thích phụ thuộc vào các cơ chế minh bạch (bao gồm nhận thức của người dùng, tính đúng đắn, trách nhiệm và khả năng giải thích của thuật toán) cũng như cách hệ thống giải thích (Rader, Cotter & Cho 2018). Ví dụ, sự khác biệt về cách trình bày giải thích, cơ chế và phương thức đưa ra giải thích cũng có ảnh hưởng khác nhau lên nhận thức của người dùng về mức độ công bằng của thuật toán (Binns et al. 2018).

### Kết luận…

Các thuật toán đang trở thành một phần không thể thiếu của hầu hết các dịch vụ hàng ngày, trong đó trải nghiệm thuật toán đang trở thành một chủ đề mới để tiếp cận lĩnh vực “AI con người lấy con người làm trọng tâm”. Nói cách khác, thay vì thúc đẩy mặt kỹ thuật, việc tạo ra AI từ hiểu biết về nhu cầu của con người và xã hội đang được quan tâm hơn cả.

Các nghiên cứu gần đây đã khám phá những cách khác nhau để tăng sự hài lòng và chấp nhận của người dùng đối với AI, bao gồm cải thiện sự tham gia của người dùng, tăng tính minh bạch, sự công bằng hoặc cách sử dụng các giải thích phù hợp. Tuy nhiên, sự hiểu biết của chúng ta về các giải pháp trải nghiệm AI vẫn còn hạn chế. Với hiểu biết về nhận thức của người dùng, có thể sẽ có những công việc trong tương lai tập trung vào thiết kế các trải nghiệm thuật toán, cũng như là chìa khóa để thiết kế các hệ thống lấy con người làm trung tâm.

Written by Diem-Trang Vo

Edited by Duy Dang-Pham

### References

Alvarado, O & Waern, A 2018, ‘Towards algorithmic experience: Initial efforts for social media contexts’, in Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, pp. 1-12.

Binns, R, Van Kleek, M, Veale, M, Lyngs, U, Zhao, J & Shadbolt, N 2018, ‘‘It’s Reducing a Human Being to a Percentage’ Perceptions of Justice in Algorithmic Decisions’, in Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, pp. 1-14.

Brunk, J, Mattern, J & Riehle, DM 2019, ‘Effect of Transparency and Trust on Acceptance of Automatic Online Comment Moderation Systems’, in 2019 IEEE 21st Conference on Business Informatics (CBI), vol. 1, pp. 429-35.

Eiband, M, Völkel, ST, Buschek, D, Cook, S & Hussmann, H 2019, ‘When people and algorithms meet: user-reported problems in intelligent everyday applications’, in Proceedings of the 24th International Conference on Intelligent User Interfaces, pp. 96-106.

Kumar, A, Braud, T, Tarkoma, S & Hui, P 2020, ‘Trustworthy AI in the Age of Pervasive Computing and Big Data’, arXiv preprint arXiv:2002.05657.

Lee, MK, Kusbit, D, Kahng, A, Kim, JT, Yuan, X, Chan, A, See, D, Noothigattu, R, Lee, S & Psomas, A 2019, ‘WeBuildAI: Participatory framework for algorithmic governance’, Proceedings of the ACM on Human-Computer Interaction, vol. 3, no. CSCW, pp. 1-35.

Rader, E, Cotter, K & Cho, J 2018, ‘Explanations as mechanisms for supporting algorithmic transparency’, in Proceedings of the 2018 CHI conference on human factors in computing systems, pp. 1-13.

Shin, D 2020, ‘How do users interact with algorithm recommender systems? The interaction of users, algorithms, and performance’, Computers in Human Behavior, p. 106344.

Shin, D, Zhong, B & Biocca, FA 2020, ‘Beyond user experience: What constitutes algorithmic experiences?’, International Journal of Information Management, vol. 52, p. 102061.