<template>
  <div id="search_friends">
    <div class="enter_name">
      <img src="../assets/icons8-search-64.png" />
      <input v-model="enterName" v-on:keyup.enter="checkName" type="text" />
      <span v-on:click="searchFollow = !searchFollow">search follow...</span>
      <!-- 
                Lang nghe su kien
                <button v-on:click="counter += 1">Đếm cừu</button>

             -->
      <ul v-if="searchFollow">
        <li v-on:click="searchFollowName">name</li>
        <li v-on:click="searchFollowNumberphone">numberphone</li>
        <li v-on:click="searchFollowEmail">email</li>
      </ul>
      <!-- 
                function viet khong co ngoac trong ""
                
                * cach su dung v-model, v-bind
                v-bind cho class va style
                ben trong class co the la bien hoac function

                vi du de nho
                <div v-bind:class="{ active: isActive }"></div>
                <div v-bind:class="classObject"></div> //class la function
                
                Chúng ta có thể truyền một mảng vào v-bind:class để áp dụng một danh sách class:
                <div v-bind:class="[activeClass, errorClass]"></div>
                
                Nếu muốn bật tắt theo điều kiện một class trong danh sách, bạn có thể dùng một toán tử ba ngôi (ternary expression):
                <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
                
                Cách làm này có thể hơi dài dòng nếu bạn có nhiều class theo điều kiện. Do đó, bạn có thể dùng cú pháp object bên trong cú pháp mảng, như sau:
                <div v-bind:class="[{ active: isActive }, errorClass]"></div>
                
                Su dung cu phap object
                Cú pháp object của v-bind:style rất đơn giản - trông giống như CSS thông thường, chỉ khác ở chỗ nó là một object JavaScript. 
                
                Bạn có thể dùng camelCase hoặc kebab-case (đặt trong dấu nháy nếu là kebab-case) đối với tên thuộc tính CSS:
                <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

                Cú pháp mảng của v-bind:style giúp bạn áp dụng nhiều object style cho cùng một phần tử web:
                <div v-bind:style="[baseStyles, overridingStyles]"></div>
             -->

      <!-- 
                ban tao bien trong data, dung v-mode cho input, textarea, input co type la checkbox, radio, hoac o select 
                (textarea sau khi nhan enter thi du lieu moi cap nhat)


                Rang buoc form input
                Bạn có thể sử dụng directive v-model để tạo ràng buộc dữ liệu 2 chiều lên các phần tử form input và textarea. 
                Vue sẽ tự động chọn cách phù hợp để cập nhật phần tử này dựa trên kiểu của input. 
                Có một chút ma thuật, v-model là syntax sugar trong việc cập nhật dữ liệu dựa trên các sự kiện input từ người dùng kèm 
                theo một số trường hợp đặc biệt khác.

                v-model sẽ bỏ qua giá trị khởi tạo của các thuộc tính value, checked hoặc selected trong mọi phần tử form. Nó luôn luôn 
                xem data trong đối tượng Vue là nguồn đáng tin cậy duy nhất. Bạn nên khai báo các giá trị khởi tạo trong JavaScript, 
                bên trong option data của component.

                vi du
                <input v-model="message" placeholder="Nhập thông điệp">
                <p>Thông điệp: {{ message }}</p>

                Modify
                .lazy
                Mặc định, v-model đồng bộ giá trị của input với dữ liệu sau sự kiện input 
                (có ngoại lệ đối với trường hợp bộ gõ như đã nói ở trên). Bạn có thể thêm modifier lazy để đồng bộ sau sự kiện change:
                //được đồng bộ sau sự kiện "change" thay vì "input"
                <input v-model.lazy="msg" >

                .number
                Nếu bạn muốn giá trị từ input được tự động chuyển kiểu về kiểu số, bạn có thể thêm modifier number vào v-model:
                <input v-model.number="age" type="number">
                Điều này rất hữu ích, vì kể cả khi input có type="number" thì giá trị được trả về của nó luôn luôn là chuỗi.

                .trim
                Dùng để tự động loại bỏ khoảng trắng trước và sau giá trị trong input.
                <input v-model.trim="msg">

             -->
      <ul v-if="showFriends">
        <router-link to="/Personal_Friend_Page">
          {{ showFriends }}
        </router-link>
      </ul>
      <p v-else>account doesn't exist!!!</p>
      <!-- 
                nhap
                so sanh
                    co chu cai giong, thi hien
                hien thi truc tiep

             -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFriends",
  data: function () {
    return {
      enterName: null,
      // arrayFriends: ["duc", "le", "hoa", "hong", "tham", "mau", "phai"],
      arrayNames: ["duc", "le", "hoa", "hong", "tham", "mau", "phai"],
      arrayEmails: [
        "a@gmail.com",
        "b@gmail.com",
        "c@gmail.com",
        "d@gmail.com",
        "e@gmail.com",
      ],
      arrayNumberphone: ["1", "2", "3", "4", "5"],
      showFriends: null,
      searchFollow: false,
      searchFollowNameState: false,
      searchFollowEmailState: false,
      searchFollowNumberphoneState: false,
    };
  },
  methods: {
    // splitName () {
    //     for (let index = 0; index < this.arrayFriends.length; index++) {
    //         this.arrayFriends[index].split('');
    //     }
    // },
    checkName: function () {
      // for (let index = 0; index < this.arrayFriends.length; index++) {
      //     if(this.enterName === this.arrayFriends[index]) {
      //         return this.showFriends = this.arrayFriends[index];
      //     } else {
      //         this.showFriends = false;
      //     }
      // }
      if (this.searchFollowNameState) {
        this.searchFollowEmailState = false;
        this.searchFollowNumberphoneState = false;
        for (let index = 0; index < this.arrayNames.length; index++) {
          if (this.enterName === this.arrayNames[index]) {
            return (this.showFriends = this.arrayNames[index]);
          } else {
            this.showFriends = false;
          }
        }
      }
      if (this.searchFollowEmailState) {
        this.searchFollowNameState = false;
        this.searchFollowNumberphoneState = false;
        for (let index = 0; index < this.arrayEmails.length; index++) {
          if (this.enterName === this.arrayEmails[index]) {
            return (this.showFriends = this.arrayEmails[index]);
          } else {
            this.showFriends = false;
          }
        }
      }
      if (this.searchFollowNumberphoneState) {
        this.searchFollowNameState = false;
        this.searchFollowEmailState = false;
        for (let index = 0; index < this.arrayNumberphone.length; index++) {
          if (this.enterName === this.arrayNumberphone[index]) {
            return (this.showFriends = this.arrayNumberphone[index]);
          } else {
            this.showFriends = false;
          }
        }
      }
    },
    searchFollowName: function () {
      this.searchFollow = !this.searchFollow;
      this.searchFollowNameState = true;
    },
    searchFollowEmail: function () {
      this.searchFollow = !this.searchFollow;
      this.searchFollowEmailState = true;
    },
    searchFollowNumberphone: function () {
      this.searchFollow = !this.searchFollow;
      this.searchFollowNumberphoneState = true;
    },
  },
};
</script>
