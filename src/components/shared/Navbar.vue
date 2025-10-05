<script setup>
import { ref } from 'vue'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'
import Logo from '@/assets/logo-white.svg'
import { User } from 'lucide-vue-next'
</script>

<template>
  <nav
    class="py-6 px-10 flex items-center justify-between font-barlow bg-primary fixed w-full z-30"
  >
    <!-- Left Navlinks will hide in mobile device -->
    <!-- Mobile -->
    <div class="block sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Bars3Icon class="size-6" />
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
      <div>
        <MagnifyingGlassIcon class="size-6" />
      </div>
      <RouterLink to="/login">
        <User class="size-6" />
      </RouterLink>
      <RouterLink to="/cart">
        <ShoppingBagIcon class="size-6" />
      </RouterLink>
    </div>
  </nav>
</template>

