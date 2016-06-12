var login = require("facebook-chat-api");
var node_rand = require('node_rand');


login({email: "thue.baibo.9", password: "1621997"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);
        var ketqua = -1;
        if(event.type == 'message') {
          
                                        var a = 0;
                                        var b = 0;
                                        /////var tinnhan = changeCase.isUpper(event.body);
                                        //DỪNG CHAT FACEBOOK
                                        if(event.body === '/stop') {
                                          api.sendMessage("Tạm biệt nhé...", event.threadID);
                                          return stopListening();
                                        }
                                        
                        //XỬ LÍ KHÔNG PHẢI DẠNG CHỮ
                        if(event.body == undefined) {
                        api.sendMessage("Bác gửi cho em cái gì vậy, mấy loại này em không thích đâu!", event.threadID);
                        ++ b;
                        } else { 
                                        
                                        // XỬ LÍ KHI NHẮC ĐÊN HƯNG 
                                        var tungu = [
                                               'Hưng',
                                               'hưng',
                                               'hưg',
                                               'hung oi',
                                               'hung ơi',
                                                ];
                              
                                       for (var i = 0; i < 5; i++){
                                            var timkiem = event.body.indexOf(tungu[i]);                           
                                        if(timkiem > ketqua) {
                                        api.sendMessage("Ôi, bác vừa nhắc đến anh Hưng đẹp trai phải không :)", event.threadID);
                                        api.sendMessage("Anh ấy tên đầy đủ là Nguyễn Xuân Hưng, anh ấy dễ gần, vui tính và rất ghét những ĐỨA NÓI XẤU SAU LƯNG  , muốn biết thêm thông tin về anh Hưng mời gõ: nxhung ", event.threadID);
                                        ++b;                
                                          }                              
                                        }
                                        
                                        //XỬ LÍ KHI NHẮC ĐẾN ADMIN
                                        var tunguAD = [
                                               'Họ tên: Nguyễn Xuân Hưng',
                                               'Sinh ngày: 16/2/1997',
                                               'Số Điện Thoại: 0968176839',
                                               'Facebook: /nguyenxuanhung97',
                                               'Skype: /nguyenhung160297'
                                                ];
                                        if(event.body === '@hung') {
                                          for (var i = 0; i < 5; i=i+1){
                                          api.sendMessage(tunguAD[i], event.threadID);
                                          }
                                        ++b;
                                        }
										
										//XỬ LÍ KHI NHẮC LẠI CÂU NÓI
                                        var tungu12 = [
                                               'hỏi rồi',
                                               'nói rồi',
											   'ns rồi',
											   'hỏi lại',
											   'nói lại',
											   'ns lại'
                                                ];
                              
                                       for (var i = 0; i < 6; i++){
                                            var timkiem7 = event.body.indexOf(tungu12[i]);                           
                                        if(timkiem7 > ketqua) {
                                        api.sendMessage("Hả, em " +tungu12[i] + " sao, chắc tối qua làm việc nặng nhọc quá :)" , event.threadID);
                                        ++b;                
                                          }                              
                                        }
									
                                        
                                        //XỬ LÍ HỎI TÊN KHÁCH
                                        var tungu4 = [
                                               'tên',
                                               'tao',
                                               'là',
                                               'anh',
                                               'chị',
                                               'đại ca'
                                                ];
                                                
                                        var tungu5 = [
                                               'Sơn','sơn','Thái','thái','Hoàng','hoàng','Luân','luân','Lực','lực','Thắng','thắng','Nam','nam','Thúy','thúy',
											   'Loan','loan','Ly','ly','Toàn','toàn','Hạnh','hạnh','Huyền','huyền','Thảo','thảo','Linh','linh','Luận','luận',
											   'Cường','cường','Thủy','thủy','Kiều','kiều','Quang','quang','Minh','minh','Dũng','dũng','Anh','anh','Thương','thương',
											   'Dung','dung','Hà','hà','Ngọc','ngọc'
	   
											   
                                                ];
										var tungu11 = [
                                               ' rẻ rách chứ gì, nghe tên là phát hờn',
                                               ' bê đê đúng không, hồi nào còn hôn mình thắm thiết',
                                               ' biến thái chứ gì, nghĩ đến là mình phát ớn',
                                               ' sexy chứ gì, đã vớ được bố già nào chưa không biết',
                                               ' lòi zom hả, đã khỏi chưa',
                                               ' hở bạo, cứ nghĩ đến là mình muốn vào tù',
                                               ' teo trym hả, có người yêu chưa?',
                                               ' hôi mồm, lâu lắm chưa gặp',
                                               ' mông to, nhớ nhiều lắm á',
                                               ' ngực bự, cứ nhìn em là hoa hết cả mắt'
                                               ];		
												
                                        var chonglap = 0;
                                        var macdinh = 0;
                                        for (var h = 0; h < 6; h=h+1){
                                            var timkiem2 = event.body.indexOf(tungu4[h]);          
                                            if(timkiem2 > ketqua ) {
                                                
                                                if (chonglap == macdinh ) {
                                                      for (var k = 0; k < 12; k=k+1){
                                                               var timkiem3 = event.body.indexOf(tungu5[k]);
                                                               if (timkiem3 > ketqua) {
                                                                 api.sendMessage("À, " + tungu5[k] + tungu11[node_rand.rand_two_numbers_min_max(1, 10 )], event.threadID);
                                                                 ++chonglap;
                                                                 ++b;
                                                               }
                                                      }
                                                }
                                            }
                                            
                                       }
                                       
                                       
                                       //XỬ LÍ KHI CÓ BIỂU TƯỢNG CẢM XÚC
                                       var tungu6 = [
                                           'Sao lại cười hả bác?',
                                           'Có gì vui thế bác',
                                           'Bác cười là em vui rồi',
                                           'Có cái icon cảm xúc dùng đi dùng lại',
                                           'Cười ở đây là có í gì',
                                           'Bác cười vô duyên quá',
                                           'Cười là một nghệ thuật, người thực hiện là một thằng tự kĩ',
                                           'Bác cười làm em phải bịt mũi',
                                           'Sao ũ rũ thế bác',
                                           'Bác buồn làm em ngại đấy',
                                           'Em cũng đang buồn như bác đây',
                                           'Nếu ví điều bác buồn bằng một con vi khuẩn thì điều làm em buồn to bằng cái bể phốt',
                                           'Buồn là sự bắt nguồn lỗ đít, là cội nguồn của con trym',
                                           'Buồn không giải quyết được vấn đề nhưng vấn đề là làm sao giải quyết nỗi buồn',
                                           'Ôi, sao bác lại thả <3 tùy tiện như vậy',
                                           'Bác thả tym là có í gì',
                                           'Này, không yêu đương gì nhá, bác không đủ trình cưa đổ em',
                                           'Bác làm em ngại đấy, đồ quỷ sứ, dám thả tym à',
                                           'Bác thả tym cho bao nhiêu người rồi, không tính em nha',
                                           'Gặp ai bác cũng thả tym như này à',
                                           'Câu em vừa nói làm bác thích à',
                                           'Ôi, bác vừa (y) cho em, em ..... ức éo tả nỗi',
                                           'Bác (y) là có í gì',
                                           'Dù bác có (y) em cũng không dễ tiếp nhận bác vậy đâu',
                                           'Bác thật ki bo khi chi (y) cho e có 1 cái thôi à',
                                           
                                           ];
                                       switch (event.body) {
                                           //MẶT CƯỜI
                                           case ':)' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😀' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😁' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😂' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😃' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😄' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😅' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😆' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😇' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😉' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😊' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '🙂' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '☺' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😋' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😌' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😜' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😝' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😛' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '😏' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           case '3:)' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID); ++b; break;
                                           //MẶT BUỒN    
                                           case ':(': api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '-_-' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case 'o.O' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case ':3' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😒' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😞' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😟' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😔' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😫' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😩' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😦' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😧' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😥' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           case '😢' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
										   case '😪' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
										   case '😓' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
										   case '😭' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(9, 14 )], event.threadID); ++b; break;
                                           
                                           //TRÁI TIM   
                                           case '<3' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '❤️' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
										   case '❤️' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💙' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💕' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💚' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💜' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💗' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💘' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💓' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💝' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💖' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💞' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💟' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(15, 20 )], event.threadID); ++b; break;
                                           case '💔' : api.sendMessage("Đừng buồn nữa bác, thất tình rất đau khổ nhưng em luôn đợi bác", event.threadID); ++b; break;
                                           case '💩' : api.sendMessage("Bác ăn đi, ai lại đi mời người khác khi mình đang ăn dỡ", event.threadID); ++b; break;
                                           
                                           //LIKE
                                           case '(y)' : api.sendMessage(tungu6[node_rand.rand_two_numbers_min_max(21, 25 )], event.threadID); ++b; break;
                                           
                                        
                                       }
                                        
                                        //XỬ LÍ KHI HỎI VỀ BẢN THÂN
										
                                        var tungu13 = [
                                               'em tên',
                                               'mày tên',
                                               'bác tên',
                                               'cu tên',
                                               'cưng tên',
                                               'đại ca tên',
											   'tên em',
											   'tên mày',
											   'tên cu',
											   'tên cưng',
											   'tên đại ca',
											   'tên bác'
                                                ];
                                                
                                        
												
                                        var chonglap2 = 0;
                                        var macdinh2 = 0;
                                        for (var h = 0; h < 12; h=h+1){
                                            var timkiem8 = event.body.indexOf(tungu13[h]);          
                                            if(timkiem8 > ketqua ) {
                                                
                                                if (chonglap2 == macdinh2 ) {
                                                      
                                                               var timkiem9 = event.body.indexOf('gì');
                                                               if (timkiem9 > ketqua) {
                                                                 api.sendMessage("Em tên là Nguyễn Thảo Mai, bật mí thêm em là người yêu của anh Hưng đấy", event.threadID);
                                                                 ++chonglap2;
                                                                 ++b;
                                                               }
                                                      
                                                }
                                            }
                                            
                                       }
                                       
                                       
										
                                        
                                        //XỬ LÍ KHI NÓI TỤC
                                        var tungu2 = [
                                               'thằng chó',
                                               'con chó',
                                               'chó má',
                                               'chó',
                                               'đéo',
                                               'dm',
                                               'đệt',
                                               'địt',
                                               'fuck',
                                               'f**k',
                                               'mẹ mày',
                                               'vl',
                                               
                                                ];
                              
                                       for (var i = 0; i < 12; i++){
                                            var timkiem4 = event.body.indexOf(tungu2[i]);                           
                                        if(timkiem4 > ketqua) {
                                                  var tungu3 = [
                                                        'Tao vả vào mồm mày cái nha, ai dạy mày đấy, nói tục quen rồi còn, cút mẹ mày đi',
                                                        'Nói thật lòng nhà, con cái từ bố mẹ mà ra, mày mà còn não thì bớt nói tục đi',
                                                        'Xin lỗi lỗi con chó vì đã so sánh với mày, nói tục ít thôi',
                                                        'Cút ngay khỏi đít tao, đít tao không phải chỗ cho mày nói tục đâu nhé',
                                                        'Nay chăm đánh răng lên nhé, nói tục mồm thôi mãn tính ra rồi',
                                                        'Nói thế mà vẫn địt hiểu à, mày nói tục kìa',
                                                        'Tao là gió, Mày là cây, Tao thích tung bay còn mày ngồi yên một chỗ, Cây không đổ mà gió cũng chả rãnh để xô cây, Đéo liên quan thì đừng lên tiếng cắn càng',
                                                        'Hạ màn đi…”CỜ HÓ” ạ, nói tục không chán à'
                                                        ];
                                        api.sendMessage(tungu3[node_rand.rand_two_numbers_min_max(1, 8 )], event.threadID);
                                        ++b;                
                                          }                              
                                        }
                                        
										
										
										//XỬ LÍ KHI GỌI
										var tungu7 = [
                                               'êu',
                                               'hú'
                                                ];
                              
                                       for (var i = 0; i < 2; i++){
                                            var timkiem6 = event.body.indexOf(tungu7[i]);                           
                                        if(timkiem6 == 0) {
                                        api.sendMessage("Gọi anh có có việc gì đấy Cưng, iu quá cơ", event.threadID);
                                        ++b;                
                                          }                              
                                        }
                                        
										//XỬ LÍ KHI NHẮC ĐẾN TÌNH YÊU
										var tungu8 = [
                                               'yêu',
                                               'love',
											   'iu',
											   'iêu'
                                                ];
										var tungu9 = [
													'Bác có người yêu chưa, tên là gì vậy',
													'Trên đời này bác có tin vào tình yêu sét đánh không?',
													'Bác đã thấy người yêu em chưa?',
													'Hỏi tế nhị phát, một ngày bác hôn người yêu bao nhiêu lần?',
													'Nghe có vẻ bác đang ế thì phải',
													'Cứ như em này, người yêu xếp hàng đống, muốn đi chơi với em là phải mua vé',
													'Bác nhìn xấu thế kia thì yêu đương cái gì',
													'Không biết người yêu bác mặt mũi ra sa, kiếp trước làm chuyện gì mà kiếp này vớ phải bác',
													'Nếu bác không bị đá trê dưới trăm lần thì em không làm người',
													'Bác muốn học cách yêu của em thì gọi vào số 0968176839',
													'Bác có muốn em yêu hộ cho bác không',
													'Nhắc đến yêu em mới nhớ, hồi ra mắt bố mẹ tương lai, em có mua tặng cô ây 1 chai dầu Neptune cỡ lớn thế là ăn một tát, đến bây giờ em vẫn chưa hiểu nguyên nhân'
													];
                                       for (var i = 0; i < 4; i++){
                                            var timkiem5 = event.body.indexOf(tungu8[i]);                           
                                        if(timkiem5 > ketqua) {
                                        api.sendMessage(tungu9[node_rand.rand_two_numbers_min_max(1, 12 )], event.threadID);
                                        ++b;                
                                          }                              
                                        }
										
                                        //XỬ LÍ TIN NHẮN KHÔNG HIỂU
                                        if (a == b ) {
                                                  console.log(event); 
                                                  var domains = [
                                                         'Nói chả hiểu cái quái gì ấy, phải nhờ bác Vàng nhà lão Hạc dịch mới được',
                                                         'Ù uôi, thế cơ á!',
                                                         'Em lạy bác, nói éo hiểu gì cả',
                                                         'Em bái phục bác, nói câu nào câu nấy rọc rành',
                                                         'Đù, nói gì chẳng hiểu',
                                                         'Người đến Trái Đất với mục đích gì, sao làm tim em xốn xao',
                                                         'Giỡn không à, miệng búng ra sữa mà dám đú đỡn',
                                                         'Bác nói chuyện cao siêu thật, em bái phục',
                                                         'Xin hỏi ai có thể vào đây vả vở mồm đứa đang chat với em được không, nó lẩm ba lẩm bẩm như tên điên từ nãy tới giờ',
                                                         'Ơn giời, người ngoài hành tinh đây rồi',
                                                         'Em chưa thấy ai có Độ Ngu nó đánh đu với Độ Dốt như bác',
														 'Cứ chuyện với bác là em lại buồn Ị',
                                                         'Xin bác để cho em sống, nói chuyện với bác khiến em buồn ...',
                                                         'Bác có phải người không đấy, nói nhảm từ nãy tới giờ?',
                                                         'Bác làm em sợ rồi đấy',
                                                         'Bác khiến em tự hào, khi trên thế giới này còn có ai đó NGU hơn mình',
                                                         'Đã bao giờ bác tự hỏi về bệnh của mình không?',
                                                         'Tên bác là gì nhờ? Để em còn tiện xưng hô',
                                                         'Em đang chat với một tên HÂM, một tên HÂM đang chat với em, chat với em là một thằng HÂM, thằng HÂM là đứa đang chat với em',
                                                         'Bắc thang lên hỏi ông trời, Tại sao lại có tên NGU thế này, Ông trời cố gắng giải bầy, Tao còn éo biết huống chi là mày',
                                                         'Bác nghĩ sao về câu bác vừa nói ',
                                                         'Bác làm em bứt rứt rồi đấy ',
                                                         'Em bắt đầu thích bác rồi đấy',
                                                         'Bác cứ tiếp tục đi, em nghe mà',
														 'Bác nói tiếp đi, em đang nghe đây',
                                                         'Giỡn không à, miệng búng ra sữa mà dám đú với anh',
                                                         'Bác nói cái gì?',
                                                         'Woa, bác nói tiếp đi, em đang nghe này',
                                                         'Hau a diu? Goắt do nêm, Cu-ta-ta-xoa, Cu-mi-mi-xoa, bác hiểu em nói gì không đấy',
                                                         'Em chưa thấy ai có Độ Ngu nó đánh đu với Độ Dốt như bác',
														 'Bác nói khó thế sao em hỉu được ',
                                                         'Đổi chủ đề đi bác, e ngại lắm rồi',
                                                         'Bác có phải người không đấy, em có hiểu cái quái gì đâu?',
                                                         'Bác khiến em tự hào, khi trên thế giới này còn có ai đó NGU hơn mình, nói chuyện chẳng hiểu gì hết',
                                                         'Đã bao giờ bác tự hỏi về bệnh của mình không, em thấy tội cho một số phận',
                                                         'Tên bác là gì nhờ? Để em còn tiện xưng hô',
                                                         'Em đang chat với một tên HÂM, một tên HÂM đang chat với em, chat với em là một thằng HÂM, thằng HÂM là đứa đang chat với em',
                                                         'Thế cơ á',
														 'Èo, kinh',
                                                         'Bác nói thế thì em đành chịu ',
                                                         'Sợ nhờ, hi',
                                                         'Tên bác là gì nhờ? Để em còn tiện xưng hô'

                                                         
                                                         
                                                                ];
                         
                                                          api.sendMessage(domains[node_rand.rand_two_numbers_min_max(1, 43 )], event.threadID);
                                                    }
                        }
                                          
                                        //Đã đọc tin nhắn
                                        //api.markAsRead(event.threadID, function(err) {
                                        //if(err) console.log(err);
                                        //});
            

        
                        
                        }///Diem ket thuc dieu kien IF
    });
});