<template>
    <section class="career-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <div class="career-gradiant"></div>
        <div class="career-body">
            <div class="header">فرصت های شغلی</div>
            <div class="subtitle">به ما در خلق دنیایی که همه در آن بتوانند از ارزهای دیجیتال استفاده کنند کمک کنید</div>
            <div class="principal-pivoted">اصول محوری</div>
            <div class="principal-pivoted-items">
                <v-col cols="12" sm="6" class="item pr-0" v-for="(item, i) in items" :key="i">
                    <v-card color="transparent" flat>
                        <v-card-text class="px-0">
                            <div class="head">{{ item.head }}</div>
                            <div class="subtitle">{{ item.subtitle }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </div>
            <div class="career-body-mid">
                <div class="head col-auto">چرا در بیت پین کار کنیم ؟</div>
                <div class="overly"></div>
            </div>
            <div class="career__body__items">
                <div><span>ساعت کاری منعطف</span></div>
                <div><span>امکان دورکاری</span></div>
                <div><span>حقوق و مزایای کافی</span></div>
                <div><span>ایجاد تعادل کار و زندگی</span></div>
                <div><span>روحیه یادگیری و کار تیمی</span></div>
                <div><span>امکان دریافت حقوق و مزایا با ارز دیجیتال</span></div>
            </div>
            <div class="career__body__jobs">
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">کارشناس پشتیبانی و ارتباط با مشتریان</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog1 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">کارشناس تولید محتوا</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog2 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">حسابدار</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog3 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">طراح گرافیک</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog4 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">کارشناس عملیات</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog5 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">برنامه‌نویس بک‌اند</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog6 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">کارشناس بازاریابی دیجیتال</div>
                </div>
                <div class="item">
                    <div class="col-auto px-0">
                        <v-btn depressed height="40" color="rgba(149, 150, 245, .2)" class="btn px-10 rounded-15" style="color:#48fb6f !important" @click="dialog7 = true">ارسال رزومه</v-btn>
                    </div>
                    <div class="text">کارشناس منابع انسانی</div>
                </div>
            </div>
        </div>



        <!-- dialog section -->
        <v-dialog v-model="dialog" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">کارشناس پشتیبانی و ارتباط با مشتریان</div>
                                <div v-for="(item, i) in support" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog1" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog1 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">کارشناس تولید محتوا</div>
                                <div v-for="(item, i) in mutimedia" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog2= false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">حسابدار</div>
                                <div v-for="(item, i) in accountant" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog3" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog3 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">طراح گرافیک</div>
                                <div v-for="(item, i) in designer" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog4" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog4 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">کارشناس عملیات</div>
                                <div v-for="(item, i) in activities" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog5" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog5 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">برنامه‌نویس بک‌اند</div>
                                <div v-for="(item, i) in backEnd" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog6" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog6 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">کارشناس بازاریابی دیجیتال</div>
                                <div v-for="(item, i) in marketing" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog7" width="800" overlay-color="#111456" persistent>
            <v-card min-height="700" color="transparent" flat class="position-relative pt-0">
                <v-btn color="success" fab depressed small class="dialog-close-btn" @click="dialog7 = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-row class="ma-0">
                    <v-col class="my-8">
                        <v-card height="570" width="100%" color="#1d1e65" flat class="rounded-20 py-6 pr-6 pl-2">
                            <v-card-text class="dialog-card-text">
                                <div class="header">کارشناس منابع انسانی</div>
                                <div v-for="(item, i) in resources" :key="i">
                                    <div class="head">{{ item.head }}</div>
                                    <ul class="lists" v-for="(item1, j) in item.child" :key="j">
                                        <li class="list">{{ item1.text }}</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5" class="position-absolute" style="left:2rem;">
                        <v-card height="630" width="100%" color="#050846" flat class="rounded-20">
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row class="pa-2">
                                        <v-col cols="12">
                                            <v-icon>mdi-account</v-icon>
                                            <label for="userName" class="font-lg white--text">نام و نام خانوادگی</label>
                                            <v-text-field  outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="نام و نام خانوادگی خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-phone</v-icon>
                                            <label for="userName" class="font-lg white--text">شماره تماس</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="شماره تماس همراه خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-email</v-icon>
                                            <label for="userName" class="font-lg white--text">ایمیل</label>
                                            <v-text-field outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="ایمیل خود را وار نمایید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-icon>mdi-cloud-upload</v-icon>
                                            <label for="userName" class="font-lg white--text">رزومه</label>
                                            <v-file-input suffix="آپلود فایل" prepend-icon="" outlined color="#48fb6f" height="70" background-color="#1d1e65" hide-details="" label="رزومه خود را آپلود کنید" class="rounded-20 font-sm mt-2" flat />
                                        </v-col>
                                        <v-col cols="12" class="mt-2">
                                            <v-btn height="60" block depressed color="#48fb6f" class="rounded-20 transition transform primary--text font-sm">ارسال رزومه</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <!-- end dialog section -->
    </section>
</template>

<script>
    export default {
        data(){
            return{
                dialog:null,
                dialog1:null,
                dialog2:null,
                dialog3:null,
                dialog4:null,
                dialog5:null,
                dialog6:null,
                dialog7:null,
                items:[
                    {
                        head:'مشتری‌محور',
                        subtitle:'در بیت‌پین، ابتدا و آخر تمام پروژه‌ها مشتریان هستند. هر آن‌چیزی که اتفاق می‌افتد، براساس ایده‌ها و خواسته‌های مشتریان است.'
                    },
                    {
                        head:'نتیجه‌محور',
                        subtitle:'مهم نیست چه کاری و چه زمانی انجام می‌دهید، مهم این است که مسئولیتی که دارید در زمان تعیین شده به انجام برسانید.'
                    },
                    {
                        head:'مسئولیت‌محور',
                        subtitle:'تمام تیم مسئول همه کارها هستند. در بیت‌پین هرکسی مدیر کل مجموعه است و هر اتفاقی که می‌افتد مسئول آن خواهد بود.'
                    },
                    {
                        head:'توسعه‌محور',
                        subtitle:'همیشه باید حرف تازه داشته باشید. نوآوری و توسعه ذهنیت همه بیت‌پینی‌ها است و هر دقیقه با دقیقه قبل متفاوت است.'
                    },
                ],
                support:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:'پاسخ به سوال‌ها و مشکلات مشتریان از طریق چت آنلاین و ایمیل',
                            },
                            {
                                text:'مدیریت امور مشتریان اعم از شکایات، مشاوره و پشینهادات',
                            },
                            {
                                text:'ارائه گزارش درباره نظر مشتریان و فیدبک‌های آن‌ها به داخل سازمان',
                            },
                            {
                                text:'پاسخ به درخواست‌های مشتریان در مواقع بحران',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'توانمندی ایجاد ارتباطات قوی ',
                            },
                            {
                                text:'مسئولیت‌پذیری، تعهد، وقت‌شناسی و نظم کاری بالا',
                            },
                            {
                                text:'آشنایی با مهارت‌های ICDL',
                            },
                            {
                                text:'توانمندی‌ نوشتاری و تایپ در چت ',
                            },
                            {
                                text:'داشتن روحیه کار تیمی و انگیزه برای یادگیری',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'انجام کار جذاب در محیط کاری جذاب و شریک شدن در رویای بیت‌پین',
                            },
                            {
                                text:'امکان رشد و آموزش به صورت روزانه و ارتقاء به مقام‌های بالای سازمان',
                            },
                            {
                                text:'بیمه و آموزش‌های تخصصی هنگام کار',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ],
                mutimedia:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:'تولید محتوای مورد نیاز برای وبلاگ و شبکه‌های اجتماعی بیت‌پین',
                            },
                            {
                                text:'ترجمه مقالات خارجی و ویرایش آن‌ها ',
                            },
                            {
                                text:'برنامه‌ریزی و ایده‌پردازی برای تولید محتوا',
                            },
                            {
                                text:'مدیریت شاخص‌های کلیدی تولید محتوا و ارتقاء آن‌ها',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'آشنایی با فضای ارزهای دیجیتال و فناوری بلاک‌چین (مزیت مهم)',
                            },
                            {
                                text:'آشنایی با شبکه‌های اجتماعی و نحوه مدیریت‌ آن‌ها (اینستاگرام، تلگرام، توییتر)',
                            },
                            {
                                text:'آشنایی با سیستم مدیریت محتوا وردپرس (WordPress)',
                            },
                            {
                                text:'آشنایی سطح خوب با زبان انگلیسی و توانمندی ترجمه',
                            },
                            {
                                text:'آشنایی با مباحث دیجیتال مارکتینگ و SEO',
                            },
                            {
                                text:'تسلط در نگارش و املاء فارسی',
                            },
                            {
                                text:'توانمندی جستجو در گوگل برای یافتن محتوای خلاقانه',
                            },
                            {
                                text:'توانمندی کار تیمی مخصوصا با سایر اعضای تیم محتوا جهت ایجاد محتوای جذاب',
                            },
                            {
                                text:'تعهد و مسئولیت‌پذیری',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'شراکت در ساخت رویای مشترک بیت‌پین و عضو اصلی این رویا بودن',
                            },
                            {
                                text:'بیمه و مزایای کامل ',
                            },
                            {
                                text:'ساعت کاری منعطف و امکان دورکاری در صورت نیاز',
                            },
                            {
                                text:'آموزش‌های بین‌المللی تخصصی حین شغل در صورت نیاز',
                            },
                            {
                                text:'کار در محیط جذاب و مبتنی بر تکنولوژی روبه‌روی ساحل دریا! ',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    },
                ],
                accountant:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:'ثبت اسناد حسابداری شرکت',
                            },
                            {
                                text:'محاسبه حقوق و دستمزد و تهیه لیست بیمه',
                            },
                            {
                                text:'ثبت فاکتورهای هزینه و فروش',
                            },
                            {
                                text:'ثبت اسناد تنخواه و مغایرت‌گیری',
                            },
                            {
                                text:'تهیه گزارش‌های دوره‌ای',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی',
                        child:[
                            {
                                text:'تسلط بر امور حسابداری و مالی و سندزنی',
                            },
                            {
                                text:'آشنایی با امور مالیاتی و قوانین مالیاتی و ارزش افزوده',
                            },
                            {
                                text:'توانمندی ارائه گزارش‌های مالی',
                            },
                            {
                                text:'آشنایی با سیستم‌های مدیریت امور اموال و انبارداری',
                            },
                            {
                                text:'آشنایی با مباحث چک، بانک و امور خزانه‌داری',
                            },
                            {
                                text:'آشنایی با امور قراردادهای حسابداری',
                            },
                            {
                                text:'داشتن صداقت کاری، امانت‌داری، تعهد و نظم کاری',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'شریک شدن در رویای مشترک ساخت بیت‌پین',
                            },
                            {
                                text:'بیمه و مزایای کافی',
                            },
                            {
                                text:'حضور در محیط کاری منعطف و جذاب ',
                            },
                            {
                                text:'امکان ارتقاء شغلی در هر زمان ',
                            },
                            {
                                text:'آموزش‌های تخصصی حین شغلی',
                            },
                            {
                                text:'کار در محیط جذاب و مبتنی بر تکنولوژی روبه‌روی ساحل دریا! ',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    },
                ],
                designer:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:'طراحی محتوای گرافیکی لازم اعم از بنرها، پوسترها، لوگوها و انیمیشن‌ها',
                            },
                            {
                                text:'ایده‌پردازی و برنامه‌ریزی برای طراحی المان‌های بصری بیت‌پین',
                            },
                            {
                                text:'همکاری با تیم محتوا برای طراحی بهترین طرح گرافیکی برای محتوا',
                            },
                            {
                                text:'ساخت انیمیشن و اینفوگرافیک',
                            },
                            {
                                text:'عکاسی برای ساخت محتوا',
                            },
                            {
                                text:'ایده‌پردازی درباره رنگ‌بندی و ایجاد خلافیت ',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'تسلط به  نرم‌افزارهای اساسی طراحی هنری و گرافیک (Photoshop, illustrator, After Effect, Indesign, ...)',
                            },
                            {
                                text:'آشنایی با تئوری‌های رنگ‌پردازی و تصویرپردازی',
                            },
                            {
                                text:'توانایی ساخت انیمیشن به صورت گیف و موشن گرافیک',
                            },
                            {
                                text:'دارای خلاقیت بالا و تسلط بر تکنیک‌های طراحی',
                            },
                            {
                                text:'توانمندی مدیریت و زمان‌بندی مناسب پروژه‌ها و طرح‌ها',
                            },
                            {
                                text:'دارای روحیه همکاری تیمی و انگیزه رشد',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'شراکت در ساخت رویای مشترک بیت‌پین و عضو اصلی این رویا بودن',
                            },
                            {
                                text:'بیمه و مزایای کامل ',
                            },
                            {
                                text:'ساعت کاری منعطف و امکان دورکاری در صورت نیاز',
                            },
                            {
                                text:'آموزش‌های بین‌المللی تخصصی حین شغل در صورت نیاز',
                            },
                            {
                                text:'کار در محیط جذاب و مبتنی بر تکنولوژی روبه‌روی ساحل دریا! ',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ],
                activities:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:' انجام و پیگیری امور عملیاتی مربوط به تیم و سازمان',
                            },
                            {
                                text:' پیگیری و انجام امور عملیاتی پرداخت، واریز و برداشت',
                            },
                            {
                                text:' انجام امور عملیاتی خرید و فروش رمزارزها',
                            },
                            {
                                text:' مسلط به نامه‌نگاری، امور اداری و روابط عمومی',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'توانمندی ایجاد ارتباطات قوی ',
                            },
                            {
                                text:'مسئولیت‌پذیری، تعهد، وقت‌شناسی و نظم کاری بالا',
                            },
                            {
                                text:'آشنایی با مهارت‌های ICDL',
                            },
                            {
                                text:'توانمندی‌ نوشتاری و تایپ در چت ',
                            },
                            {
                                text:'داشتن روحیه کار تیمی و انگیزه برای یادگیری',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'انجام کار جذاب در محیط کاری جذاب و شریک شدن در رویای بیت‌پین',
                            },
                            {
                                text:'امکان رشد و آموزش به صورت روزانه و ارتقاء به مقام‌های بالای سازمان',
                            },
                            {
                                text:'بیمه و آموزش‌های تخصصی هنگام کار',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ],
                backEnd:[
                    {
                        head:'مسولیت ها',
                        child:[
                            {
                                text:'توسعه و نگهداری از وب و موبایل اپلیکیشن',
                            },
                            {
                                text:'ارزیابی کارایی و سرعت اپلیکیشن‌های موجود',
                            },
                            {
                                text:'توسعه و نوشتن کدهای تمیز و سریع و با کیفیت',
                            },
                            {
                                text:'مدیریت محیط هاست',
                            },
                            {
                                text:'تست QA',
                            },
                            {
                                text:'مشکل‌یابی و دیباگ محصولات',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'مدرک کارشناسی در رشته‌های علوم کامپیوتر، مهندسی نرم‌افزار، ریاضی و یا داشتن تجربه مرتبط',
                            },
                            {
                                text:'تسلط به یک زبان اسکریپتی مانند پایتون و یا داشتن اشتیاق برای یادگیری این زبان',
                            },
                            {
                                text:'داشتن دانش در ارتباط با توسعه اپلیکیشن‌های تحت وب و تجربه با یک فریم‌ورک مرتبط مانند جنگو',
                            },
                            {
                                text:'داشتن دانش در ارتباط با طراحی شی‌گرا و طراحی ماجولار',
                            },
                            {
                                text:'تجربه کار با لینوکس',
                            },
                            {
                                text:'تجربه کار با گیت',
                            },
                            {
                                text:' تجربه کاری در زمینه توسعه بک‌اند',
                            },
                            {
                                text:' تجربه کار با داکر',
                            },
                            {
                                text:'تجربه کار با ساختمان‌داده',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'انجام کار جذاب در محیط کاری جذاب و شریک شدن در رویای بیت‌پین',
                            },
                            {
                                text:'امکان رشد و آموزش به صورت روزانه و ارتقاء به مقام‌های بالای سازمان',
                            },
                            {
                                text:'بیمه و آموزش‌های تخصصی هنگام کار',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ],
                marketing:[
                    {
                        head:'مسئولیت ها',
                        child:[
                            {
                                text:'تولید محتوای دیجیتال برای وب‌سایت و شبکه‌های اجتماعی',
                            },
                            {
                                text:'گزارش‌گیری و نظارت بر فعالیت‌های بازاریابی دیجیتال ',
                            },
                            {
                                text:'اندازه‌گیری فعالیت‌های بازاریابی دیجیتال',
                            },
                            {
                                text:'مطالعه و شناخت کانال‌های پربازده دیجیتال',
                            },
                            {
                                text:'ارتباط با شبکه‌های تبلیغات دیجیتال و اجرای کمپین‌های دیجیتال',
                            },
                            {
                                text:'شناسایی کلمات کلیدی و اجرای ساختار و کلیات SEO',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'تسلط بر شبکه‌های اجتماعی به خصوص اینستاگرام و توییتر',
                            },
                            {
                                text:'آشنایی با ابزارهای بازاریابی دیجیتال به خصوص Google Analytics',
                            },
                            {
                                text:'آشنایی با نرم‌افزارهای اساسی مانند Excell',
                            },
                            {
                                text:'آشنایی با مفاهیم مرتبط با بازاریابی و بازاریابی دیجیتال',
                            },
                            {
                                text:'آشنایی با شبکه‌های تبلیغاتی دیجیتال ',
                            },
                            {
                                text:'روحیه کار تیمی و پیشرفت',
                            },
                            {
                                text:'آشنایی با حوزه ارزهای دیجیتال مزیت محسوب می‌شود',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'امکان انجام کار به صورت حضوری یا دورکاری (مطابق با خواسته شخص)',
                            },
                            {
                                text:'انجام کار جذاب در محیط کاری جذاب و شریک شدن در رویای بیت‌پین',
                            },
                            {
                                text:'امکان رشد و آموزش به صورت روزانه و ارتقاء به مقام‌های بالای سازمان',
                            },
                            {
                                text:'بیمه و آموزش‌های تخصصی هنگام کار',
                            },
                            {
                                text:'کار در محیط جذاب و پویا روبه‌روی ساحل دریای خزر!',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ],
                resources:[
                    {
                        head:'مسئولیت ها',
                        child:[
                            {
                                text:'جمع آوری اطلاعات درباره منابع انسانی و کشب و پیدا کردن نیروی انسانی جدید برای سازمان',
                            },
                            {
                                text:'انجام امور مصاحبه، امتیازدهی و جمع‌بندی درباره جذب و استخدام',
                            },
                            {
                                text:'هماهنگی داخلی منابع انسانی سازمان اعم از امور جبران خدمات، مرخصی‌ها و مناسبت‌ها ',
                            },
                            {
                                text:'همکاری و مطالعه درباره روش‌های جدید مدیریت منابع انسانی و خشنودسازی کارکنان سازمان',
                            },
                            {
                                text:'ارائه گزارش ماهانه منابع انسانی به سازمان',
                            }
                        ]
                    },
                    {
                        head:'نیازمندی ها',
                        child:[
                            {
                                text:'داشتن روحیه کار تیمی و توسعه گرا بودن',
                            },
                            {
                                text:'مسئولیت‌پذیری و انعطاف‌پذیری در شرایط مختلف کاری سازمان',
                            },
                            {
                                text:'نتیجه‌محور بودن',
                            },
                            {
                                text:'دارای قدرت ارتباط با کارکنان و خارج سازمان',
                            },
                            {
                                text:'عملگرا بودن',
                            }
                        ]
                    },
                    {
                        head:'مزایا',
                        child:[
                            {
                                text:'انجام کار جذاب در محیط کاری جذاب و شریک شدن در رویای بیت‌پین',
                            },
                            {
                                text:'امکان رشد و آموزش به صورت روزانه و ارتقاء به مقام‌های بالای سازمان',
                            },
                            {
                                text:'بیمه تکمیلی و آموزش‌های تخصصی هنگام کار',
                            }
                        ]
                    },
                    {
                        head:'محل فعالیت',
                        child:[
                            {
                                text:'منطقه آزاد تجاری انزلی',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>