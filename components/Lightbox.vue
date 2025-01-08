<script setup>
/**
 * Props:
 *  - show: Boolean indicating whether the lightbox is visible.
 *  - src: URL/path of the image or video.
 *  - type: 'image' or 'video'.
 */
const props = defineProps(["modelValue", "src", "type"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <!-- Overlay -->
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      @click.self="emit('update:modelValue', false)"
    >
      <div class="max-w-full max-h-full overflow-auto">
        <!-- Image -->
        <template v-if="type === 'image'">
          <img :src="src" alt="Lightbox image" class="object-contain" />
        </template>

        <!-- Video -->
        <template v-else-if="type === 'video'">
          <video controls autoplay class="rounded">
            <source :src="src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </template>
      </div>
    </div>
  </transition>
</template>