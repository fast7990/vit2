<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow: auto"
          >
            <li
              v-for="(item, index) in news_list_obj.result"
              :key="index"
              class="infinite-list-item"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.image"
                fit="cover"
              ></el-image>
              <a :href="item.path" target="_blank" :alt="item.title">{{
                item.title
              }}</a>
              <el-button @click="delitem(index)">删除</el-button>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row><el-button @click="openlogin">login</el-button></el-row>
    </el-main>
  </el-container>
</template>
<script setup>
import { getWangYiNews } from "@/api";
import { reactive, getCurrentInstance, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const { ctx, proxy, appContext } = getCurrentInstance();
const store = new useStore();
const route = useRoute();
const router = useRouter();

const news_list_obj = reactive({
  result: [1],
  count: 0,
});
onMounted(() => {
  getWangYiNews().then((res) => {
    news_list_obj.result = res.result;
  });
});
console.log(store.state.name);
const load = () => {
  news_list_obj.count++;
  console.log(news_list_obj.count);
};
const openlogin = () => {
  router.push("/login");
};
const delitem = (index) => {
  news_list_obj.result.splice(index, 1);
};
</script>
<style scoped>
.infinite-list {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
}
</style>