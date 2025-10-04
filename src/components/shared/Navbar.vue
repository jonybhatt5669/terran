<script setup>
import Logo from '@/assets/logo-white.svg'
import { ref } from 'vue'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="py-6 px-10 flex items-center justify-between font-barlow bg-primary">
    <!-- Left Navlinks will hide in mobile device -->
    <!-- Mobile -->
    <div class="block sm:hidden">
      <Sheet>
        <SheetTrigger>
          <i class="pi pi-bars" style="font-size: 1.5rem"></i>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
    <div class="hidden sm:flex items-center gap-6">
      <RouterLink to="/t1pro">
        <h3 class="font-semibold">T1Pro</h3>
      </RouterLink>
      <RouterLink to="/accessories">
        <h3 class="font-semibold">Accessories</h3>
      </RouterLink>
      <RouterLink to="/find-a-dealer">
        <h3 class="font-semibold">Find A Dealer</h3>
      </RouterLink>
    </div>
    <!-- Logo -->
    <img :src="Logo" alt="logo" class="size-16 object-cover" />
    <!-- Right Navlinks  -->
    <div class="flex items-center gap-6">
      <RouterLink to="/support">
        <h3 class="font-semibold">Support</h3>
      </RouterLink>
    </div>
  </nav>
</template>
