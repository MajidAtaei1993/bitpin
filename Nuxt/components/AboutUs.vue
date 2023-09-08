<template>
    <section class="about-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-row class="aboutus__body">
            <v-col cols="12" class="aboutus__body__title">
                <img :src="cube" alt="" class="cube">
                <img :src="logo" alt="" class="logo">
                <div class="header">درباره بیت‌پین</div>
                <div class="subtitle">در آینده سرمایه‌گذاری کن</div>
                <div class="text">چشم‌انداز بیت‌پین کمک و سرعت بخشیدن به روند استفاده از ارزهای دیجیتال است؛ تا شما و همه سرمایه‌گذاران در سرتاسر جهان بتوانند از قدرت فوق‌العاده ارزهای دیجیتال استفاده کنند. </div>
            </v-col>
            <v-col class="aboutus-body-header" cols="12">
                <span class="text">ما که هستیم؟</span>
                <div></div>
            </v-col>
            <v-col class="desc" cols="12">
                بیت‌پین، محصول شرکت سنا ایمن مبادله از گروه شرکت‌های مطرح در حوزه فناوری اطلاعات و ارتباطات، مدیریت مالی و سرمایه‌گذاری و حقوقی به همراه تیمی از خبرگان حوزه فناوری و مدیریت مالی است. با توجه به اینکه بیت‌کوین و سایر ارزهای دیجیتال یک دارایی امن و مهم جهت سرمایه‌گذاری محسوب می‌شود، و از سوی دیگر امنیت و سادگی این معاملات در کشور از اهمیت بالایی برخوردار است، این تیم تصمیم به ایجاد یک سیستم امن، ساده و حرفه‌ای با در نظر گرفتن الزامات قانونی و حقوقی برای سرمایه‌گذاران، بازرگانان و فعالین کسب‌وکار جهت سرمایه‌گذاری و استفاده از ارزهای دیجیتال گرفت.
            </v-col>
            <v-col class="aboutus-body-header" cols="12">
                <span class="text">چه کار می‌کنیم؟</span>
                <div></div>
            </v-col>
            <v-col class="desc" cols="12">
                چه معامله‌گر حرفه‌ای ارز دیجیتال یا سرمایه‌گذار مبتدی باشید و چه بازرگان و تاجری نیازمند ارزهای دیجیتال، بیت‌پین این قدرت را به شما می‌دهد تا به راحتی و به صورت کامل به ارزهای دیجیتال دسترسی داشته باشید. پلتفرم بیت‌پین، با انواع ارزهای دیجیتال و جفت‌ارزهای مختلف و مجموعه‌ای از ابزارهای حرفه‌ای مبادله‌گری، به شما اجازه می‌دهد تا سبد سرمایه‌گذاری رمز ارزی خود را ساخته و رمز ارز مورد نیاز کار خود را تامین کنید.
            </v-col>
            <v-col class="aboutus-body-why" cols="12">
                <div class="header col-12 text-center">چرا بیت پین ؟</div>
                <v-row class="item">
                    <v-col class="left">
                        <div class="subheader">امنیت</div>
                        <div class="text">پلتفرم بیت‌پین، با استفاده از مجموعه ابزارهای فنی و تکنیک‌هایی مانند ذخیره‌سازی سرد (Cold Storage) و فرآیند شناسایی دو عاملی (Two Factor Authentication) به بهترین نحو از دارایی شما نگهداری خواهد کرد.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/safety.svg" alt="" class="logo">
                    </v-col>
                </v-row>
                <v-row class="item align-self-end">
                    <v-col class="left">
                        <div class="subheader">همه جا در دسترس</div>
                        <div class="text">بیت‌پین دارای نسخه وب، اندروید و iOS بوده و کاربران در هر سطحی و هر نیازی در هر کجا که باشند با هر دستگاهی می‌توانند از خدمات بیت‌پین استفاده کنند.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/net.svg" alt="" class="logo">
                    </v-col>
                </v-row>
                <v-row class="item">
                    <v-col class="left">
                        <div class="subheader">پشتیبانی استثنائی</div>
                        <div class="text">در هر زمان از شب و روز، به صورت تلفنی، چت، ایمیل و سیستم تیکتینگ به صورت آنی و فوری همراه کاربران خود هستیم و هیچ سوالی در بیت‌پین بدون جواب نخواهد ماند.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/support.svg" alt="" class="logo">
                    </v-col>
                </v-row>
                <v-row class="item align-self-end">
                    <v-col class="left">
                        <div class="subheader">لیست ارزهای مختلف</div>
                        <div class="text">بیت‌پین سعی می‌کند از بیشتر رمز ارزهای معروف و مطرح پشتیبانی کند و همچنین امکان معامله با جفت‌ارزهای مختلف را به کاربران خود بدهد.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/coin.svg" alt="" class="logo">
                    </v-col>
                </v-row>
                <v-row class="item">
                    <v-col class="left">
                        <div class="subheader">سیستم سفارش‌گذاری حرفه‌ای</div>
                        <div class="text">با استفاده از تنوع سیستم سفارش گذاری معمولی و شرطی، شما می‌توانید حد ضرر و سود خود را مشخص کنید و در مواقع مناسب بخرید و بفروشید. در این صورت بیشترین سود نصیب شما خواهد شد.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/factory.svg" alt="" class="logo">
                    </v-col>
                </v-row>
                <v-row class="item align-self-end">
                    <v-col class="left">
                        <div class="subheader">آکادمی بیت‌پین</div>
                        <div class="text">آموزش یکی از رسالت‌های اصلی بیت‌پین است و کاربران می‌توانند هر نوع اطلاعاتی که درباره رمز ارزها، نحوه سرمایه‌گذاری در آن‌ها و تکنولوژی همراه آن‌ها لازم دارند در آکادمی بیت‌پین پیدا کنند.</div>
                    </v-col>
                    <v-col class="right">
                        <img :src="cube" alt="" class="cube">
                        <img src="/assets/images/dep.svg" alt="" class="logo">
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-btn depressed class="clear-cookies-btn">پاک کردن کوکی ها</v-btn>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                logo:'/assets/images/logo.svg',
                cube:'/assets/images/bg-cube-logo.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>