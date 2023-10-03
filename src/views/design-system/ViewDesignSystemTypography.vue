<script setup lang="ts"></script>

<template>
  <div class="prose lg:prose-xl">
    <h1 class="">
      Typography
    </h1>
    <h2>
      Headings
    </h2>
    <div class="rounded-lg px-4 py-3 border bg-gray-50">
      <div v-for="i in 6" :key="i" class="not-prose mb-3">
        <pre class="text-gray-600 text-sm">{{ `heading-${i}` }}</pre>
        <component :is="`h${i}`" :class="`heading-${i}`">
          This is a heading {{ i }}.
        </component>
      </div>
    </div>
  </div>
  <hr class="-mx-8 my-16">
  <div class="prose lg:prose-xl">
    <h2>
      Paragraphs
    </h2>
    <div class="rounded-lg px-4 py-3 border bg-gray-50">
      <div v-for="i in ['sm', 'md', 'lg']" :key="i" class="not-prose mb-3">
        <pre class="text-gray-600 text-sm">paragraph {{ i }}</pre>
        <p :class="`paragraph-${i}`">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
          exercitationem voluptatem quos quas quidem. Quisquam voluptatum,
          voluptate, quibusdam, quia voluptas quod dolorum exercitationem
          voluptatem quos quas quidem.
        </p>
      </div>
    </div>
  </div>
</template>
