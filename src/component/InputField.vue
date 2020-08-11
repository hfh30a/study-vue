<template>
    <div>
        <div>
            <label>名前 : </label><input type="text" id="name" name="name"><span class="required"> (※)</span>
        </div>
        <div>
            <label>年齢 : </label><input type="text" id="age" name="age"><span class="required"> (※)</span>
        </div>
        <div>
            <label>備考 : </label><input type="text" id="remark" name="remark">
        </div>
        <div><span class="required">(※) 必須項目</span></div>
        <div>
            <input type="button" class="btn btn-primary" value="追加"/>
            <input type="button" class="btn btn-primary" value="リセット"/>
        </div>
        <hr>
    </div>
</template>

<script></script>

<style>
.required {
    color: red;
}
</style>
