// Simple echo bot. He'll repeat anything that you say. 
// Will stop when you say '/stop'  .indexOf("Hung")
var login = require("facebook-chat-api");
var node_rand = require('node_rand');

login({email: "thue.baibo.90", password: "1621997"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);
    var ketqua = -1;
        switch(event.type) {
          case "message":
                              if(event.body === '/stop') {
                                api.sendMessage("Goodbye...", event.threadID);
                                return stopListening();
                              }
                              
                              var timkiem = event.body.indexOf( "Hưng");                           
                              if(timkiem > ketqua) {
                              api.sendMessage("anh Hưng đẹp trai :)", event.threadID);
                              api.sendMessage("anh Hưng đẹp trai vô biên giới :)", event.threadID);
                              break;
                              }
                              
                              
                              //Đã xem tin nhắn
                              api.markAsRead(event.threadID, function(err) {
                                if(err) console.log(err);
                              });

          case "event":
                              console.log(event); 
                                                  var domains = [
                                                         'Nói chả hiểu cái quái gì ấy, phải nhờ bác Vàng nhà lão Hạc dịch mới được',
                                                         'Bác Hạc ơi, bác gọi anh Vàng sang đây hộ cháu, có đứa nước ngoài nói chẳng hiểu gì hết á',
                                                         'Em lạy bác, nói éo hiểu gì cả',
                                                         'Trên thế giới này chắc chẳng ai hiểu được bác nói gì, em bái phục',
                                                         'Đù, nói gì chẳng hiểu',
                                                         'Ngươi đến Trái Đất với mục đích gì, sao ta chẳng hiểu người nói cái gì vậy',
                                                         'Giỡn không à, miệng búng ra sữa mà dám đú với anh',
                                                         'Bác nói chuyện cao siêu thật, chẳng hiểu gì hết á, em bái phục',
                                                         'Xin hỏi ai có thể vào đây vả vở mồm đứa đang chat với em được không, nó lẩm ba lẩm bẩm như tên điên từ nãy tới giờ',
                                                         'Ơn giời, người ngoài hành tinh đây rồi, Hau a diu? Goắt do nêm, Cu-ta-ta-xoa, Cu-mi-mi-xoa, bác hiểu em nói gì không đấy',
                                                         'Em chưa thấy ai có Độ Ngu nó đánh đu với Độ Dốt như bác',
                                                         'Em đang chat với một tên HÂM, một tên HÂM đang chat với em, chat với em là một thằng HÂM, thằng HÂM là đứa đang chat với em',
                                                         'Bắc thang lên hỏi ông trời, Tại sao lại có tên NGU thế này, Ông trời cố gắng giải bầy, Tao còn éo biết huống chi là mày',
                                                         'Cứ chuyện với bác là em lại buồn Ị',
                                                         'Xin bác để cho em sống, nói chuyện với bác khiến em muốn đái',
                                                         'Bác có phải người không đấy, em có hiểu cái quái gì đâu?',
                                                         'Một tháng tiền lương của bác tại Bệnh viện Tê Tê (TT) là bao nhiêu, em tò mò chuyện đó khi vừa đọc được tin nhắn trên của bác',
                                                         'Bác khiến em tự hào, khi trên thế giới này còn có ai đó NGU hơn mình, nói chuyện chẳng hiểu gì hết',
                                                         'Đã bao giờ bác tự hỏi về bệnh của mình không, em thấy tội cho một số phận'
                                                         
                                                                ];
                              api.sendMessage(domains[node_rand.rand_two_numbers_min_max(1, 16 )], event.threadID);
        }
    });
});