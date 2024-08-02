<template>
    <header class="relative z-50">
        <section class="bg-white flex items-center justify-between p-3 px-32 fixed top-0 left-0 right-0">
            <div>
                <h1>NAMA WEBSITE </h1>
            </div>
            <ul class="flex gap-6 font-medium">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/paket">Paket</router-link>
                </li>
                <li>
                    <router-link to="/rute">Rute Travel</router-link>
                </li>
            </ul>

            <div class="flex gap-4">
                <div class="bg-blue-600 p-2 rounded-2xl text-white font-medium px-6">
                    <router-link to="">Telpon</router-link>
                </div>

                <div class="border-2 p-2 rounded-2xl text-slate-600 font-medium px-6">
                    <router-link to="">Telpon</router-link>
                </div>
            </div>
        </section>
    </header>
</template>