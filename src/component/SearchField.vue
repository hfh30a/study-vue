<template>
  <div class="clear">
    <div>検索条件</div>
    <div id="field-search">
      <div>
        <label>名前 :</label>
        <input type="text" id="search-name" name="search-name" />
      </div>
      <div class="age">
        <label>年齢 :</label>
        <input type="text" id="search-age-min" name="search-age-min" />
        <label>〜</label>
        <input type="text" id="search-age-max" name="search-age-max" />
      </div>
      <div>
        <input
          type="button"
          id="search-button-search"
          name="button"
          class="btn btn-primary"
          value="検索"
          onclick="searchData();"
        />
        <input
          type="button"
          id="search-button-reset"
          name="button"
          class="btn btn-primary"
          value="リセット"
          onclick="searchDataReset();"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script></script>

<style>
</style>
