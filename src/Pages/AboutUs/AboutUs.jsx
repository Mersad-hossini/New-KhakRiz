import React from "react";
import "./AboutUs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function AboutUs() {
  return (
    <>
      <Header />
      <TitleTab title="درباره ما" />
      <div className="container-fluid">
        <div className="row" dir="rtl">
          <div className="col-12">
            <p className="h6 mt-4">
              " به نظر من مساله دفاع مقدس و آنچه در این دوران بروز کرد، یک مساله
              عادی نیست؛ برای همه ملت‌ها این طور است؛ در مورد ملت ما به دلایل
              گوناگون بیشتر از دیگران است؛ لذا این را نمی‌شود جزو روال عادی
              زندگی ملت‌ها به حساب آورد. دوران دفاع مقدس .برای ملت ما .ظرفیت و
              موقعیتی بود که این ملت بتواند اعماق جوهره خودش را در ابعاد مختلف
              نشان دهد، و نشان داد
            </p>
          </div>
          <div className="col-12">
            <p className="h6 mt-3">
              خدا را سپاسگزاریم که یک نمونه‌ای از آنچه که در ماجرای بزرگ عاشورا
              دیده شد، نقل شد برای ما، در دوران ما به وجود آمد؛ مردان و زنان و
              جوانانی که به هدف اندیشیدند، از جان، از مال، از تعلقات زندگی چشم
              پوشیدند؛ این را ما در دوران دفاع مقدس به چشم دیدیم و امروز ادامه
              آن و برکات آن را داریم مشاهده می‌کنیم.
            </p>
          </div>
          <div className="col-12">
            <p className="h6">
              هشت سال دفاع مقدس ما، صرفاً یک امتداد زمانی و فقط یک برهه زمانی
              نیست. گنجینه عظیمی است که تا مدت‌های طولانی، ملت ما می‌تواند از آن
              استفاده کند، آن را استخراج کند و مصرف کند و سرمایه گذاری کند.
            </p>
          </div>
          <br />
          <br />
          <div className="col-12">
            <br />
            <h3 className="text-center fw-bold">
              فرماندهی معظم کل قوا حضرت امام خامنه ای
            </h3>
          </div>
          <br />
          <br />
          <div className="row mt-5">
            <div className="col-12 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-feather"
                viewBox="0 0 16 16"
              >
                <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-feather"
                viewBox="0 0 16 16"
              >
                <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-feather"
                viewBox="0 0 16 16"
              >
                <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z" />
              </svg>
            </div>
            <p className="h6 mt-4">
              شهادت هنر مردان خداست و شهیدان هنرمندانی بزرگ، در بازنمایی و ترسیم
              مفاهیم تعالی انسان خاکی‌اند. گام زدن در راه ترویج فرهنگ ایثار و
              شهادت، جهادی است که انسان را به سرچشمه‌های حقیقت و لطف الهی رهنمون
              می‌سازد.
            </p>
          </div>
          <div className="col-12 mt-3">
            <p className="h6 mt-4">
              دفاع مقدس، گفتنی‌های بسیاری را در صحیفه دل و اندیشه پدیدآورندگان
              آن و مردم فهمیم جامعه به یادگار دارد که فرصت طرح و بیان آن‌ها در
              میان مخاطبان باید فراهم گردد. در دل فرماندهان و رزمندگان و
              خانواده‌های آنان حرف‌ها و ناگفتنی‌های بسیار زیادی وجود دارد و دفاع
              مقدس نور است که خبرگزاری دفاع مقدس می‌تواند این نورانیت و عطر را
              به جامعه انتقال دهد تا همه از آن بهره‌مند شوند. دفاع مقدس نقاط
              عمیق و دست نیافتنی زیادی دارد که باید آن را به جامعه منتقل کرد.
            </p>
          </div>
          <div className="col-12 mt-3">
            <p className="h6 mt-4">
              این 8 سال، سند افتخار و مظلومیت رزمندگان ما و سند ظلم و جنایت
              مدعیان امنیت، دموکراسی و رفاه در دنیاست و دائم باید این مطالب به
              لحاظ سیاسی، فرهنگی و از طریق هر ابزاری از جمله هنر، فیلم، سینما
              برای مردم بازگو شود تا ارزش‌های دفاع مقدس در میان مردم ترویج داده
              شود. عرصه دفاع مقدس در واقع جلوه‌گاه فرهنگ و اندیشه و سرچشمه جوشان
              فرهنگ زاینده و اصیل اسلامی را در افق دیدگان مجسم می‌سازد.
            </p>
          </div>
          <div className="col-12 mt-3">
            <p className="h6 mt-4">
              از دیگر سو، با عنایت به نقش و جایگاه «رسانه» به عنوان وسیله‌ای
              راهبردی در رشد معنوی انسان‌ها، به منظور ورود هر چه بیشتر موضوعی به
              نام دفاع مقدس درعرصه رسانه‌های کشور که بالتبع موجب ارتقاء
              آگاهی‌های مخاطبان نسبت به آن‌چه که در دوران 8 ساله نبرد حق علیه
              باطل اتفاق افتاد، خواهد شد و نیز برای رساندن پیام انقلاب اسلامی و
              ملت عزیز ایران به جهان، خبرگزاری دفاع مقدس توسط بنیاد حفظ آثار و
              نشر ارزش‌های دفاع مقدس تاسیس می‌شود.
            </p>
          </div>
          <div className="col-12 mt-3">
            <p className="h6 mt-4">
              «خاکریز دریا » با عنوان انگلیسی Khakrizedarya.ir، موسسه‌ای است
              فرهنگی هنری که وابسته به بنیاد حفظ آثار و نشر ارزش‌های دفاع مقدس
              استان بوشهر می باشد.
            </p>
          </div>
          <div className="row mt-3">
            <h5 className="mt-4 fw-bold">اهداف</h5>
            <div className="ol">
              <ol>
                <li>
                  انتقال و ترویج فرهنگ و ارزش‌های دفاع مقدس به نسل‌های حاضر و
                  آینده؛
                </li>

                <li>
                  حضور موثر در حوزه رسانه‌ای بین الملل برای مقابله با جنگ روانی
                  و جنگ نرم دشمن؛
                </li>

                <li>
                  پیشبرد دیپلماسی عمومی ج.ا.ا و حمایت موثر از محور مقاومت اسلامی
                  در منطقه و جهان؛
                </li>

                <li>
                  تبیین مواضع کشور در موضوع بیداری اسلامی و تقویت قدرت نرم جبهه
                  فرهنگی رسانه‌ای و هنری انقلاب اسلامی؛
                </li>

                <li>
                  رعایت کامل امانت داری، اصل اطلاع رسانی صادقانه و تعامل سازنده
                  با مخاطبان داخلی و خارجی برای گسترش فرهنگ ارزشمند دوران دفاع
                  مقدس؛
                </li>

                <li>
                  الگوسازی از چهره‌های ماندگار دفاع مقدس با بهره گیری از فرهنگ،
                  درس‌ها و عبرت‌های دفاع مقدس به ویژه فرهنگ عاشورایی؛
                </li>

                <li>
                  کوشش در ثبت و ضبط رسانه‌ای وقایع دوران پرشکوه، دفاع مقدس و
                  مصون ساختن آن از تحریف، مبالغه گویی یا فراموش شدن وقایع در گذر
                  زمان؛
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
