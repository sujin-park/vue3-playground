<template>
  <div class="home">
    <modal>모달 내용</modal>
    <template v-for="item in list" :key="item.id">
      <movie-card :item="item" />
    </template>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import { getMovies } from '@/api/movie';

import Modal from '@/components/modal';
import MovieCard from '@/components/movie-card';

export default {
  name: 'Home',
  components: {
    Modal,
    MovieCard
  },
  setup() {
    const state = reactive({
      list: []
    });

    onMounted(async () => {
      try {
        const {
          data: { results }
        } = await getMovies();

        state.list = results;
      } catch (e) {
        alert(e);
      }
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>
