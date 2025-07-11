const { ref, onMounted, computed } = Vue;
const app = {
    setup() {
        const issue = ref([]);
        const speakers = ref([]);
        fetch('assets/js/data.json')
            .then(res => res.json())
            .then(data => {
                issue.value = data.issue;
                speakers.value = data.speaker;
            });

        const popupIsopen = ref(false);
        let national = ref('');
        let name = ref('');
        let name_eng = ref('');
        let img = ref('');
        let title1 = ref('');
        let title2 = ref('');
        let academic = ref('');
        let career = ref('');
        let intro = ref('');
        let day1_time = ref('');
        let day1_speech_title1 = ref('');
        let day1_speech_subtitle1 = ref('');

        //講師彈跳視窗
        function speaker_popup(id) {

            let nowSpeaker=speakers.value.find(speaker => speaker.id === id);

            national.value = nowSpeaker.national;
            name.value = nowSpeaker.name;
            name_eng.value = nowSpeaker.name_eng;
            img.value = nowSpeaker.img;
            title1.value = nowSpeaker.title1;
            title2.value = nowSpeaker.title2;
            academic.value = nowSpeaker.academic;
            career.value = nowSpeaker.career;
            intro.value = nowSpeaker.intro;
            day1_time.value = nowSpeaker.day1_time;
            day1_speech_title1.value = nowSpeaker.day1_speech_title1;
            day1_speech_subtitle1.value = nowSpeaker.day1_speech_subtitle1;
            
            popupIsopen.value = true;
        }
        function speaker_close() {
            popupIsopen.value = false;
        }

        return {
            issue, speakers,
            speaker_popup, speaker_close, popupIsopen,
            national, img, name, name_eng, title1, title2, academic, career, intro, day1_time, day1_speech_title1, day1_speech_subtitle1
        };
    }
};
Vue.createApp(app).mount("#app");


$(document).ready(function() {
    $('#status').fadeOut(); 
    $('#preloader').delay(500).fadeOut('slow'); 

    // scroll
    $('.item1').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_3').offset().top-60}, 600, 'linear');
    });
    $('.item2').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_4').offset().top-60}, 600, 'linear');
    });
    $('.item3').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_5').offset().top-60}, 600, 'linear');
    });
    $('.item4').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_6').offset().top-60}, 600, 'linear');
    });
    // $('.item5').on('click', function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: $('#section_7').offset().top-60}, 600, 'linear');
    // });
    $('.item6').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_9').offset().top-60}, 600, 'linear');
    });
    $('.item7').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_8').offset().top-60}, 600, 'linear');
    });
    $('.item8').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_10').offset().top-60}, 600, 'linear');
    });
    $('.item9').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_11').offset().top-60}, 600, 'linear');
    });

    

    //漢堡選單
    $('.menu_box').on('click',function () {
        $('.menu_list_mb').css({'right':0});
    });

    //手機版選單-關閉鈕
    $('.menu_close_box').on('click',function () {
        $('.menu_list_mb').css({'right':-100+'%'});
    });
    
    // mb menu
    $('.mb_item').on('click', function () {
        $('.menu_list_mb').css({'right':-100+'%'});
    });

    // agenda-schedule
    $(".agenda-more-btn").click(function () { 
            $('.schedule-chart').toggleClass("active")
            if ($(".schedule-chart").hasClass("active")){
                $(this).html('<img src="assets/images/arrow-down.svg" alt=""> Close')
                $(".agenda-more-btn img").css("transform","rotate(180deg)")
            }else{
                $(this).html('More <img src="assets/images/arrow-down.svg" alt="">')
                $('html, body').animate({ scrollTop: $('.schedule-chart').offset().top-60}, 0, 'linear');
            }
    });

    $(".notice").click(function () { 
        $('.signup-notice').toggleClass("show")
        if ($(".signup-notice").hasClass("show")){
            $(this).html('顯示較少<img src="assets/images/arrow-down.svg" alt="">')
            $(".notice img").css("transform","rotate(180deg)")
            $('html, body').animate({ scrollTop: $('.signup-notice').offset().top-100}, 0, 'linear');
        }else{
            $(this).html('點擊查看注意事項<img src="assets/images/arrow-down.svg" alt="">')
            $('html, body').animate({ scrollTop: $('#section_7').offset().top-100}, 0, 'linear');
        }
    })

    // slider
    // $('.soho-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     centerPadding: 200,
    //     autoplaySpeed: 3000,
    //     centerMode: true,
    //     responsive: [
    //         {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             centerPadding: 300,
    //             infinite: true,
    //             dots: true
    //         }
    //         },
    //         {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerPadding: 200,
    //             dots: false,
    //         }
    //         }
    //     ]
    // });

    // $('.history-slider').slick({
    //     dots: false,
    //     infinite: true,
    //     // autoplay: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerPadding: 200,
    //     autoplaySpeed: 3000,
    //     centerMode: false,
    //     responsive: [
    //         {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             centerPadding: 300,
    //             infinite: true
    //         }
    //         },
    //         {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerPadding: 200
    //         }
    //         }
    //     ]
    // });

    // right fixed area
    $('.go-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_1').offset().top}, 600, 'linear');
    });

    $('.go-to-signup').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.section_7').offset().top-100}, 600, 'linear');
    });

    $('.go-fill-form').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section_8').offset().top-100}, 600, 'linear');
    });

    if ($('.right-fixed-area').length) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.right-fixed-area').addClass('see');
                } else {
                    $('.right-fixed-area').removeClass('see');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }

    

    

    // 報名表單 ------------------------------------------------------------------------------------------
    // var submitBtn = document.getElementById("submit");
    // submitBtn.onclick = function(){
    //     event.preventDefault();
    //     const name = $('input[name="Name"]').val();
    //     const gender = $('select[name="Gender"]').val();
    //     const mobile = $('input[name="Cell_phone"]').val();
    //     const email = $('input[name="Email"]').val();
    //     // const Age = $('select[name="Age"]').val();
    //     // const title = $('input[name="Title"]').val();
    //     // const Company = $('select[name="Company"]').val();
    //     // const Industry = $('select[name="Industry"]').val();
    //     const agree = $('input[name="Is_agree"]').prop('checked');
        
    //     // 定義驗證结果
    //     var valid = true;
    //     var mobileRegex = /^[0-9]{4}[0-9]{3}[0-9]{3}$/;
    //     var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //     // 驗證參加形式
    //     // if (!$("input[name='ParticipationForm']:checked").val()) {
    //     //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='ParticipationForm']").offset().top-120}, 600, 'linear');
    //     //     $("input[type='radio'][name='ParticipationForm']").focus();
    //     //     alert("請勾選一項參加形式。");
    //     //     return false;
    //     // } 

    //     // 驗證勾選場次
    //     if (!$("input[name='Sign_up_type']:checked").val()) {
    //         $('html, body').animate({ scrollTop: $("input[type='radio'][name='Sign_up_type']").offset().top-120}, 600, 'linear');
    //         $("input[type='radio'][name='Sign_up_type']").focus();
    //         alert("請勾選一項參加場次。");
    //         return false;
    //     } 
        

    //     // 驗證姓名和稱呼
    //     else if (name === '') {
    //     valid = false;
    //     $("input[type='text'][name='Name']").focus();
    //     alert('請填寫姓名');
    //     }

    //     else if (gender === '') {
    //         valid = false;
    //         $("select[name='Gender']").focus();
    //         alert('請填寫稱呼');
    //         }
        
    //     // 驗證手機號碼
    //     else if (!mobileRegex.test(mobile)) {
    //     valid = false;
    //     $("input[type='tel'][name='Mobile']").focus();
    //     alert('請填寫正確手機號碼');
    //     }
        
    //     // 驗證e-mail
    //     else if (!emailRegex.test(email)) {
    //     valid = false;
    //     $("input[type='email'][name='Email']").focus();
    //     alert('請填寫正確電子郵件');
    //     }
        
    //     // // 驗證產年齡是否填写
    //     // else if (Age === '') {
    //     // valid = false;
    //     // $("select[name='Age']").focus();
    //     // alert('請確認年齡已填寫');
    //     // }

    //     // // 驗證是否在職
    //     // else if (!$("input[name='Work']:checked").val()) {
    //     //     valid = false;
    //     //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='Work']").offset().top-120}, 600, 'linear');
    //     //     $("input[type='radio'][name='Work']").focus();
    //     //     alert("請勾選是否在職。");
    //     // } 

    //     // // 驗證產業別是否填写
    //     // else if (Industry === '') {
    //     //     valid = false;
    //     //     $("select[name='Industry']").focus();
    //     //     alert('請確認產業別已填寫');
    //     // }

    //     // // 驗證家庭狀況
    //     // else if (!$("input[name='FamilyStatus']:checked").val()) {
    //     //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='FamilyStatus']").offset().top-120}, 600, 'linear');
    //     //     $("input[type='radio'][name='FamilyStatus']").focus();
    //     //     alert("請勾選家庭狀況");
    //     //     return false;
    //     // } 
        
    //     // 驗證個人信息收集
    //     else if (!agree) {
    //     valid = false;
    //     $("#agree").focus();
    //     alert('請勾選同意個資蒐集，才可報名。');
    //     }
        
    //     // 驗證通過，就signup
    //     if (valid) {
    //         console.log("驗證成功")
    //         sign_up();
    //     }
    

    //     // 報名成功 popup
    //     $('.signup-popup-close').click(function(){
    //         $('.signup-popup').hide();
    //         location.href = "./index.html"
        
    //     });

    //     $('.click-to-submit').click(function(){
    //         $('.signup-popup').hide();
    //         location.href = "./#Notice"
    //         location.reload();
    //     });

    

    
    // const signup_form = document.getElementById("signup_form");
    // const data = new FormData(signup_form);

    // // console.log(data)

    // // 使用 entries() 方法獲取 FormData 中的所有內容
    // // for (const entry of data.entries()) {
    // // console.log(entry[0] + ": " + entry[1]);
    // // }

    // function sign_up() {
    //     var form = $('#signup_form')[0];
    //     var data = new FormData(form);
    //     // console.log(data);
    //     // console.log(JSON.stringfy(data));
    //     $.ajax({
    //         type: "POST",
    //         url: 'https://events.businesstoday.com.tw/backend/happiness_mature_age_2023/sign_up',
    //         data: data,
    //         processData: false,
    //         contentType: false,
    //         //enctype: 'multipart/form-data',
    //         error: function(xhr, ajaxOption, thrownError) {
                
    //             alert("系統忙碌中，請稍後再試！");
    //         },
    //         success: function(response) {
    //             console.log(response)
    //             if (response['bIsSignUpSuccess'] == "0") {
    //                 alert(response['sError']);
    //                 return ;
    //             }else{
                
    //             // alert("感謝您的報名，主辦單位將審核資料，審核通過後，將於活動前1天以手機簡訊寄發報到序號，謝謝");
    //             $(".signup-popup").show()
    //             // location.href = "./index.html";
    //             }
                
    //         }
    //     });
    // }

    // }

    // 問卷填寫------------------------------------------------------------------------------------
    $('.form-close').click(function(){
        $('.formfill').hide();
    });

    $('.fill-chart').click(function(){
        $('.formfill').show();
        $( ".form-content" ).scrollTop(0);
    });

     // 監聽 textarea 的 input 事件
    $("#comments").on("input", function() {
        var maxLength = parseInt($(this).attr("maxlength"));
        var currentLength = $(this).val().length;

        // 檢查是否超過字數限制
        if (currentLength > maxLength) {
        $(this).val($(this).val().substr(0, maxLength)); // 截斷超過部分
        }
    });
    

    $('.next_q').click(function(){
        var Question = $(this).parent().siblings('.select_q').children('div').children('input[type="checkbox"]:checked').val();
        
    
        if (!Question) {
            
            // $("input").focus();
            $( ".form-content" ).scrollTop(0);
            alert("請勾選至少一項答案。");
            return false;
            
        } 
        
        else{
            let next_index = $(this).parent().parent('.question').index()+1
            $('.question').eq(next_index).addClass("show").siblings().removeClass('show');
            $('.dot').eq(next_index).addClass("orange-dot");
            $( ".form-content" ).scrollTop(0);
        }
    });

    $('.prev_q').click(function(){
        let prev_index = $(this).parent().parent('.question').index()-1
        $('.question').eq(prev_index).addClass("show").siblings().removeClass('show');
        $('.dot').eq(prev_index+1).removeClass("orange-dot")
        $( ".form-content" ).scrollTop(0);
    });

    $(".go-fill-data").click(function(){
        let next_index = $(this).parent().parent('.question').index()+1
            $('.question').eq(next_index).addClass("show").siblings().removeClass('show');
            $('.dot').eq(next_index).addClass("orange-dot");
            $( ".form-content" ).scrollTop(0);
    })

    


    // 送出問卷
    const submitForm = document.getElementById("FormSubmit");
    if (submitForm) {
        submitForm.onclick = function(){
            event.preventDefault();
            const formname = $('.form-input input[name="Name"]').val();
            const formGender = $('.form-input select[name="Gender"]').val();
            const formmobile = $('.form-input input[name="Cell_phone"]').val();
            const formemail = $('.form-input input[name="Email"]').val();
            const Age = $('.form-input select[name="Age"]').val();
            const Work = $(".form-input input[name='Is_work']:checked").val();
            const Industry = $('.form-input select[name="Industry_type"]').val();
            const Academic = $('.form-input select[name="Education"]').val();
            const FamilyStatus = $('.form-input select[name="Marital_status"]').val();
            const check = $('.form-input input[name="Is_agree"]').prop('checked');

            // 定義驗證结果
            var valid = true;
            var mobileRegex = /^[0-9]{4}[0-9]{3}[0-9]{3}$/;
            var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            
            // 驗證姓名和稱呼
            if (formname === '') {
                valid = false;
                $(".form-input input[type='text'][name='Name']").focus();
                alert('請填寫姓名');
                }

            else if (formGender === '') {
                valid = false;
                $(".form-input select[name='Gender']").focus();
                alert("請選擇稱呼");
                }
                
            // 驗證手機號碼
            else if (!mobileRegex.test(formmobile)) {
                valid = false;
                $(".form-input input[type='tel'][name='Cell_phone']").focus();
                alert('請填寫正確手機號碼');
                }
            
            // 驗證e-mail
            else if (!emailRegex.test(formemail)) {
                valid = false;
                $(".form-input input[type='email'][name='Email']").focus();
                alert('請填寫正確電子郵件');
                }

            // 驗證產年齡是否填写
            else if (Age === '') {
                valid = false;
                $(".form-input select[name='Age']").focus();
                alert('請確認年齡已填寫');
                }

            // 驗證是否在職
            else if (!Work) {
                valid = false;
                $('html, body').animate({ scrollTop: $(".form-input input[type='radio'][name='Is_work']").offset().top-120}, 600, 'linear');
                $(".form-input input[type='radio'][name='Is_work']").focus();
                alert("請勾選是否在職。");
            } 

            // 驗證產業別是否填写
            else if (Industry === '') {
                valid = false;
                $(".form-input select[name='Industry_type']").focus();
                alert('請確認產業別已填寫');
            }

            // 驗證學歷
            else if (Academic === '') {
                $('html, body').animate({ scrollTop: $(".form-input select[name='Education']").offset().top-120}, 600, 'linear');
                $(".form-input select[name='Education']").focus();
                alert("請選擇學歷");
                return false;
            } 

            // 驗證家庭狀況
            else if (FamilyStatus === '') {
                $('html, body').animate({ scrollTop: $(".form-input select[name='Marital_status']").offset().top-120}, 600, 'linear');
                $(".form-input select[name='Marital_status']").focus();
                alert("請選擇家庭狀況");
                return false;
            } 

            // 驗證個人信息收集
            else if (!check) {
                valid = false;
                $("#check").focus();
                alert('請勾選同意個資蒐集，才可報名。');
            }

            // 驗證通過，就送出問卷
            if (valid) {
                console.log("送出問卷")
                // if ($("#comments")==="") {
                //     $("#comments").val("對熟齡無建議");
                // }
                submit_form();
            }


            // 成功填寫問卷 popup
            $('.submit-form-close').click(function(){
                $('.submit-form-popup').hide();
                location.href = "./index.html"
            });

            const question_form = document.getElementById("Questions");
            const question_data = new FormData(question_form);
            // console.log(question_data)

            // 使用 entries() 方法獲取 FormData 中的所有內容
            // for (const entry of question_data.entries()) {
            //     console.log(entry[0] + ": " + entry[1]);
            //     }

            function submit_form() {
                
                // console.log(data);
                // console.log(JSON.stringfy(data));
                var Q1_answer = [];
                var Q2_answer = [];
                var Q3_answer = [];
                var Q4_answer = [];

                // 使用 jQuery 選擇所有被選中的複選框
                $("input[type='checkbox'][name^='Q1_answer']:checked").each(function() {
                    Q1_answer.push($(this).val());
                });
                $("input[type='checkbox'][name^='Q2_answer']:checked").each(function() {
                    Q2_answer.push($(this).val());
                });
                $("input[type='checkbox'][name^='Q3_answer']:checked").each(function() {
                    Q3_answer.push($(this).val());
                });
                $("input[type='checkbox'][name^='Q4_answer']:checked").each(function() {
                    Q4_answer.push($(this).val());
                });

                // 將被選中的複選框值儲存在隱藏的輸入欄位中，以便提交
                var Q1_answerInput = $("input[type='checkbox'][name^='Q1_answer']").attr("type", "hidden").attr("name", "Q1_answer").val(Q1_answer.join("-"));
                var Q2_answerInput = $("input[type='checkbox'][name^='Q2_answer']").attr("type", "hidden").attr("name", "Q2_answer").val(Q2_answer.join("-"));
                var Q3_answerInput = $("input[type='checkbox'][name^='Q3_answer']").attr("type", "hidden").attr("name", "Q3_answer").val(Q3_answer.join("-"));
                var Q4_answerInput = $("input[type='checkbox'][name^='Q4_answer']").attr("type", "hidden").attr("name", "Q4_answer").val(Q4_answer.join("-"));
                // 將隱藏的輸入欄位添加到表單中
                $("#FormSubmit").append(Q1_answerInput);
                $("#FormSubmit").append(Q2_answerInput);
                $("#FormSubmit").append(Q3_answerInput);
                $("#FormSubmit").append(Q4_answerInput);

                // var Q5_answer = $('#comments').val();
                // if (Q5_answer.trim() === '') {
                //     $('#comments').val('對熟齡無建議');
                // }
                
                setTimeout(function(){
                    var question_form = $('#Questions')[0];
                    var question_data = new FormData(question_form);

                    

                    $.ajax({
                        type: "POST",
                        url: 'https://events.businesstoday.com.tw/backend/happiness_mature_age_2023_questionnaire/sign_up',
                        data: question_data,
                        processData: false,
                        contentType: false,
                        //enctype: 'multipart/form-data',
                        error: function(xhr, ajaxOption, thrownError) {
                            alert("系統忙碌中，請稍後再試！");
                            // location.href = "./index.html";
                            // $('.prev_q').hide();

                        },
                        success: function(response) {
                            console.log(response)
                            if (response['bIsSuccess'] == "0") {
                                alert(response['sError']);
                                return ;
                            }else{
                            // console.log("Q2_answer@:", question_data.get("Q2_answer"))
                            $(".submit-form-popup").show()
                                
                            // location.href = "./index.html";
                            }
                            
                        }
                    });
                },500)
                
            }

            // latest news
            setTimeout(function(){
                $('.news-popup').css("opacity","1");
            },3000)
            
            $('.news-popup-close').click(function(){
                $('.news-popup').hide();
            });

            $('.sign-up').click(function(){
                $('.news-popup').hide();
                $('html, body').animate({ scrollTop: $('.section_7').offset().top-100}, 600, 'linear');
            });
        }
    }
});