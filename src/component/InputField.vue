<template>
  <div>
    <div>
      <label>名前 :</label>
      <input type="text" id="name" name="name" v-model="name" />
      <span class="required" v-if="isIdRequired">{{ required }}</span>
      <span class="ok" v-else>OK!</span>
      <span class="display-none">{{ nameCount }}</span>
    </div>
    <div>
      <label>年齢 :</label>
      <input type="text" id="age" name="age" v-model="age" />
      <span class="required" v-if="isAgeRequired">{{ required }}</span>
      <span class="ok" v-else>OK!</span>
      <span class="display-none">{{ ageCount }}</span>
    </div>
    <div>
      <label>備考 :</label>
      <input type="text" id="remark" name="remark" />
    </div>
    <div>
      <input type="button" class="btn btn-primary" value="追加" />
      <input type="button" class="btn btn-primary" value="リセット" />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      isIdRequired: true,
      isAgeRequired: true,
      required: "必須項目です",
    };
  },
  computed: {
    nameCount() {
      console.log(this.name.length);
      if (this.name.length === 0) {
        this.isIdRequired = true;
      } else {
        this.isIdRequired = false;
      }
      return this.name.length;
    },
    ageCount() {
      console.log(this.age.length);
      if (this.age.length === 0) {
        this.isAgeRequired = true;
      } else {
        this.isAgeRequired = false;
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
