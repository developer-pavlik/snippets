$('#js-child-info').validate({

       ignore: "input[type='text']:hidden",

       rules: {
           childname: {
               required: true
           },
           childbirthday: {
               required: true,
               number: true,
               dayCheck: true,
               rangelength: [1, 2]
           },
           childbirthmonth: {
               required: true
           },
           childbirthyear: {
               required: true,
               number: true,
               min: 1900,
               max: currentYear
           }
       },
       messages: {
           childname: {
               required: "Поле обязательно к заполнению"
           },
           childbirthday: {
               required: "Поле обязательно к заполнению",
               number: "Не верный формат",
               dayCheck: "Не верный формат",
               rangelength: "Не верный формат"
           },
           childbirthmonth: {
               required: "Поле обязательно к заполнению"
           },
           childbirthyear: {
               required: "Поле обязательно к заполнению",
               number: "Не верный формат",
               min: "Введите корректный возраст",
               max: "Введите корректный возраст"
           }
       }
   });