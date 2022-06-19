<template>
  <!-- 選擇圖片 -->
  <section class="section">
    <div class="desc">
      <p>在 Vue 3.0 ，優先推薦使用 Composition API 來寫組件</p>

      <a
        href="https://github.com/chengpeiquan/vue-picture-cropper-demo/blob/main/src/views/composition.vue"
        target="_blank"
      >
        <span>查看本 DEMO 源码</span>
      </a>
    </div>

    <p>请先点击按钮選擇圖片，会进入裁切处理环节</p>

    <!-- 设置一个按钮 -->
    <Button class="select-picture">
      <template #icon><UploadOutlined /></template>
      <span>選擇圖片</span>
      <input
        ref="uploadInput"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/gif"
        @change="selectFile"
      />
    </Button>
    <!-- 设置一个按钮 -->
  </section>
  <!-- 選擇圖片 -->

  <!-- 结果预览区 -->
  <section class="section" v-if="result.dataURL && result.blobURL">
    <p>裁切后的 Base64 图片预览：</p>
    <div class="preview">
      <img :src="result.dataURL" alt="组合式 API" />
    </div>
    <p>裁切后的 Blob 图片预览：</p>
    <div class="preview">
      <img :src="result.blobURL" alt="组合式 API" />
    </div>
    <p>可以按 F12 查看打印的 base64 / blob / file 结果</p>
  </section>
  <!-- 结果预览区 -->

  <!-- 用于裁切的弹窗 -->
  <Modal v-model:visible="isShowDialog" title="图片裁切" :maskClosable="false">
    <template #footer>
      <Button @click="isShowDialog = false">取消</Button>
      <Button @click="clear">清除</Button>
      <Button @click="reset">重置</Button>
      <Button type="primary" @click="getResult">裁切</Button>
    </template>

    <!-- 图片裁切插件 -->
    <VuePictureCropper
      :boxStyle="{
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
        margin: 'auto',
      }"
      :img="pic"
      :options="{
        viewMode: 1,
        dragMode: 'crop',
        aspectRatio: 16 / 9,
      }"
    />
    <!-- 图片裁切插件 -->
  </Modal>
  <!-- 用于裁切的弹窗 -->
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { Button, Modal } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import VuePictureCropper, { cropper } from "vue-picture-cropper";

export default defineComponent({
  name: "StencilPage",
  components: {
    Button,
    Modal,
    VuePictureCropper,
    UploadOutlined,
  },
  setup() {
    const uploadInput = (ref < HTMLInputElement) | (null > null);
    const pic = ref("");
    const result = reactive({
      dataURL: "",
      blobURL: "",
    });
    const isShowDialog = ref(false);

    /**
     * 選擇圖片
     */
    const selectFile = (e) => {
      // 重置上一次的结果
      result.dataURL = "";
      result.blobURL = "";

      // 如果有多個裁剪框，也需要重置掉裁剪目標的值，避免使用同一張圖片無法觸發watch
      pic.value = "";

      // 獲取選取的文件
      const target = e.target;
      const { files } = target;
      if (!files) return;
      const file = files[0];

      // 轉換為base64傳給裁切組件
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // 更新裁切彈窗的圖片源
        pic.value = String(reader.result);

        // 顯示裁切彈窗
        isShowDialog.value = true;

        // 清空已選擇的文件
        if (!uploadInput.value) return;
        uploadInput.value.value = "";
      };
    };

    /**
     * 獲取裁切結果
     */
    const getResult = async () => {
      // console.log(cropper)

      // 獲取生成的base64圖片地址
      const base64 = cropper.getDataURL();

      // 獲取生成的blob文件信息
      const blob = await cropper.getBlob();

      // 獲取生成的file文件信息
      const file = await cropper.getFile({
        fileName: "测试文件名，可不传",
      });

      console.log({ base64, blob, file });

      // 把base64賦給結果展示區
      result.dataURL = base64;
      try {
        result.blobURL = URL.createObjectURL(blob);
      } catch (e) {
        result.blobURL = "";
      }

      // 隱藏裁切彈窗
      isShowDialog.value = false;
    };

    /**
     * 清除裁切框
     */
    const clear = () => {
      cropper.clear();
    };

    /**
     * 重置默認的裁切區域
     */
    const reset = () => {
      cropper.reset();
    };

    return {
      // 數據
      uploadInput,
      pic,
      result,
      isShowDialog,

      // 方法
      selectFile,
      getResult,
      clear,
      reset,
    };
  },
});
</script>

<style scoped></style>
