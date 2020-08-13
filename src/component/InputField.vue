<template>
  <div>
    <div>
      <label>名前 :</label>
      <input type="text" id="name" name="name" v-model="name" />
      <span class="required" v-if="isIdRequired">{{ nameWarning }}</span>
      <span class="ok" v-else>{{ ok }}</span>
      <span class="display-none">{{ nameCount }}</span>
    </div>
    <div>
      <label>年齢 :</label>
      <input type="text" id="age" name="age" v-model="age" />
      <span class="required" v-if="isAgeRequired">{{ ageWarning }}</span>
      <span class="ok" v-else>{{ ok }}</span>
      <span class="display-none">{{ ageCount }}</span>
    </div>
    <div>
      <label>備考 :</label>
      <input type="text" id="remark" name="remark" v-model="remark" />
    </div>
    <div>
      <input type="button" class="btn btn-primary" @click="addData()" value="追加" />
      <input type="button" class="btn btn-primary" @click="resetData()" value="リセット" />
    </div>
    <hr />
  </div>
</template>

<script>
import * as Util from '../scripts/util'
export default {
  data() {
    return {
      name: "",
      age: "",
      remark: "",
      isIdRequired: true,
      isAgeRequired: true,
      required: "必須項目です",
      nameWarning: "必須項目です",
      ageWarning: "必須項目です",
      ok: "OK!"
    };
  },
  methods: {
    addData: function() {
      window.alert(this.nameWarning);
      window.alert(this.ok);
      if(this.nameWarning !== this.ok) {
        window.alert("名前が無効です");
        return;
      }
      if(this.ageWarning !== this.ok) {
        window.alert("年齢が無効です");
        return;
      }
      window.alert("ok!");
    },
    resetData: function() {
      this.name = "";
      this.age = "";
      this.remark = "";
    }
  },
  computed: {
    nameCount() {
      if (this.name.length === 0) {
        this.isIdRequired = true;
        this.nameWarning = this.required
      } else {
        this.isIdRequired = false;
      }
      return this.name.length;
    },
    ageCount() {
      if (this.age.length === 0) {
        this.isAgeRequired = true;
        this.ageWarning = this.required
      } else {
        if(Util.checkNumber(this.age)) {
          this.isAgeRequired = false;
        } else{
          this.isAgeRequired = true
          this.ageWarning = "年齢は半角数字で入力してください"
        }
      }
      return this.age.length;
    },
  },
};
</script>

<style>
.required {
  color: red;
}

.ok {
  color: green;
}
</style>
