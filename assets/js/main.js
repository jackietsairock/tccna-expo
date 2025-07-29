const { ref, onMounted, computed, watch, nextTick, onUnmounted } = Vue;
const app = {
    setup() {
        const issue = ref([]);
        const speakers = ref([]);

        const windowWidth = ref(0);
        const setDivResize = ref({});

        const popupIsopen = ref(false);
        let swiper;       // 存 Swiper 實體
        let national = ref('');
        let name = ref('');
        let name_eng = ref('');
        let img = ref('');
        let title1 = ref('');
        let title2 = ref('');
        let academic = ref('');
        let career = ref('');
        let intro = ref('');

        onMounted(() => {
            handleResize();
            window.addEventListener('resize', handleResize);

            fetch('assets/js/data.json')
                .then(res => res.json())
                .then(data => {
                    speakers.value = data.speaker;
                });
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        // 2. 資料一改動 -> DOM 更新完 -> 初始化 / 更新 Swiper
        watch(speakers, async () => {
            await nextTick();            // 等 DOM 更新
            if (swiper) {
                swiper.update();           // 已存在就刷新
            } else {
                swiper = new Swiper('.speaker_mySwiper', {
                    slidesPerView: calcSlidesPerView(),
                    spaceBetween: 50,
                    loop: true,
                    pagination: { el: '.speaker_slider_area .swiper-pagination', clickable: true },
                    navigation: { nextEl: '.speaker_slider_area .swiper-button-next',
                                prevEl: '.speaker_slider_area .swiper-button-prev' },
                });
                window.addEventListener('resize', () => {
                    swiper.params.slidesPerView = calcSlidesPerView();
                    swiper.update();
                });
            }
        });

         function handleResize() {
            windowWidth.value = getWindowWidth();
            setDivResize.value = getDivResize('.kv_area');

            // console.log('setDivResize:', setDivResize.value.width);
            // console.log('setDivResize:', setDivResize.value.height);

            function getWindowWidth() {
                return window.innerWidth;
            }

            function getDivResize(parentClass) {

                let parent_width = document.querySelector(parentClass).offsetWidth,
                    parent_height = document.querySelector(parentClass).offsetHeight,
                    width = 0,
                    height = 0,
                    windowWidth = window.innerWidth;

                    // console.log(parent_width)

                if(parent_width<parent_height+500){
                    // console.log('寬小於高')
                    // console.log(windowWidth)

                    if(windowWidth <= 1024){
                        width = parent_width/1.2;
                        height = parent_width/1;
                    }else{
                        width = parent_width/1.3;
                        height = parent_width/3.9;
                    }
                
                }else{
                    // console.log('寬大於高')
                    width = parent_height/0.7;
                    height = parent_height/2.1;
                }

                return { width, height };
            }   
        }

        function calcSlidesPerView () {
            const w = window.innerWidth;
            return w < 680 ? 1 : w < 768 ? 2 : w < 1000 ? 3 : 4;
        }

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
            
            popupIsopen.value = true;
        }
        function speaker_close() {
            popupIsopen.value = false;
        }

        return {
            issue, speakers,
            speaker_popup, speaker_close, popupIsopen, windowWidth, setDivResize,
            national, img, name, name_eng, title1, title2, academic, career, intro,
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
    var submitBtn = document.getElementById("submit");
    submitBtn.onclick = function(){
        event.preventDefault();
        const name = $('input[type="text"][name="Name"]').val();
        const gender = $('input[type="radio"][name="Gender"]:checked').val();
        const mobile = $('input[type="text"][name="Mobile"]').val();
        const email = $('input[type="email"][name="Email"]').val();
        // const Age = $('select[name="Age"]').val();
        // const title = $('input[name="Title"]').val();
        // const Company = $('select[name="Company"]').val();
        // const Industry = $('select[name="Industry"]').val();
        const interesting = $('input[type="checkbox"][name="Interesting[]"]:checked').map(function() {
            return this.value;
        }).get();
        const agree = $('input[type=checkbox][name="agree"]').prop('checked');
        
        // 定義驗證结果
        var valid = true;
        var mobileRegex = /^[0-9]{4}[0-9]{3}[0-9]{3}$/;
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // 驗證參加形式
        // if (!$("input[name='ParticipationForm']:checked").val()) {
        //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='ParticipationForm']").offset().top-120}, 600, 'linear');
        //     $("input[type='radio'][name='ParticipationForm']").focus();
        //     alert("請勾選一項參加形式。");
        //     return false;
        // } 

        // 請填寫姓名
        if (name === '') {
            valid = false;
            $("input[type='text'][name='Name']").focus();
            alert('請填寫姓名');
            
        } 
        
        // 驗證手機號碼
        else if (!mobileRegex.test(mobile)) {
            valid = false;
            $("input[type='tel'][name='Mobile']").focus();
            alert('請填寫正確手機號碼');
        }

        else if (gender === ''|| gender==undefined) {
            valid = false;
            $("select[name='Gender']").focus();
            alert('請填寫稱呼');
        }

         // 驗證電子郵件
        else if (!emailRegex.test(email)) {
            valid = false;
            $("input[type='email'][name='Email']").focus();
            alert('請填寫正確電子郵件');
        }

        // 請填寫有興趣了解
        else if (interesting.length === 0) {
            // 沒有勾選任何選項
            valid = false;
            $('input[type="checkbox"][name="Interesting[]"]').eq(0).focus();
            alert('請填寫有興趣了解');
        }
        
        // // 驗證產年齡是否填写
        // else if (Age === '') {
        // valid = false;
        // $("select[name='Age']").focus();
        // alert('請確認年齡已填寫');
        // }

        // // 驗證是否在職
        // else if (!$("input[name='Work']:checked").val()) {
        //     valid = false;
        //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='Work']").offset().top-120}, 600, 'linear');
        //     $("input[type='radio'][name='Work']").focus();
        //     alert("請勾選是否在職。");
        // } 

        // // 驗證產業別是否填写
        // else if (Industry === '') {
        //     valid = false;
        //     $("select[name='Industry']").focus();
        //     alert('請確認產業別已填寫');
        // }

        // // 驗證家庭狀況
        // else if (!$("input[name='FamilyStatus']:checked").val()) {
        //     $('html, body').animate({ scrollTop: $("input[type='radio'][name='FamilyStatus']").offset().top-120}, 600, 'linear');
        //     $("input[type='radio'][name='FamilyStatus']").focus();
        //     alert("請勾選家庭狀況");
        //     return false;
        // } 
        
        // 驗證個人信息收集
        else if (!agree) {
        valid = false;
        $("#agree").focus();
        alert('請勾選同意個資蒐集，才可報名。');
        }
        
        // 驗證通過，就signup
        if (valid) {
            console.log("驗證成功")
            sign_up();
        }

    

        function sign_up() {
            var form = $('#data_form')[0];
            var data = new FormData(form);
            // console.log(data);
            // console.log(JSON.stringfy(data));
            //使用 entries() 方法獲取 FormData 中的所有內容
            // for (const entry of data.entries()) {
            //     console.log(entry[0] + ": " + entry[1]);
            // }

            $.ajax({
                type: "POST",
                // url: 'https://' + window.location.hostname + '/backend/tccnaExpo2025/sign_up?' + new Date(),
                url: 'https://events.businesstoday.com.tw/backend/tccnaExpo2025/sign_up?' + new Date(),
                data: data,
                processData: false,
                contentType: false,
                //enctype: 'multipart/form-data',
                error: function(xhr, ajaxOption, thrownError) {
                    
                    alert("系統忙碌中，請稍後再試！");
                },
                success: function(response) {
                    console.log(response)
                    if (response['bIsSuccess'] === 0) {
                        alert(response['sError']);
                        return;
                    } else {
                        alert(
                            "謝謝您的報名，審核通知將於活動前3-5天以信件告知，還請稍後。"
                        );
                        location.href = "./index.html";
                    }
                    
                }
            });
        }

    }

    
});