<template>
  <div class="movie-card" @click="$emit('click', item.id)">
    <div @click="onClick(item.id), onAddMark(item.id)">
      <img :src="`https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`" />
    </div>
    <h3>{{ item.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 0,
        title: '',
        poster_path: ''
      })
    }
  },
  emits: ['click'],
  setup() {
    const onClick = id => console.log(id, 'click');
    const onAddMark = id => console.log(id, 'mark');

    return {
      onClick,
      onAddMark
    };
  }
};
</script>
