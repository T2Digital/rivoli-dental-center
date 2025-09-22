// بيانات الخدمات (18 خدمة)
const services = [
  {
    id: 1,
    name: 'استشارة',
    description: 'استشارة طبية لتقييم حالة الأسنان.',
    image: 'https://i.ibb.co/Nd3mJqHP/image.jpg',
    duration: '30 دقيقة',
    benefits: 'تشخيص دقيق، خطة علاج مخصصة.',
    moreInfo: 'استشارة مع أطباء متخصصين.',
    details: 'نقدم استشارات شاملة مع أطباء متخصصين لتحديد أفضل خطة علاجية لكل مريض.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=استشارة+1',
      'https://via.placeholder.com/300x200?text=استشارة+2',
      'https://via.placeholder.com/300x200?text=استشارة+3'
    ]
  },
  {
    id: 2,
    name: 'تنظيف الأسنان',
    description: 'إزالة الجير والبقع للحفاظ على صحة الأسنان.',
    image: 'https://i.ibb.co/21X60BPf/image.jpg',
    duration: '30 دقيقة',
    benefits: 'منع التسوس، تحسين صحة اللثة.',
    moreInfo: 'تنظيف بالموجات فوق الصوتية.',
    details: 'تنظيف عميق باستخدام الموجات فوق الصوتية لإزالة الجير والبقع بأمان.',
    video: 'https://www.youtube.com/embed/g5F_LOWJBhk?si=jFPuq_nG7MMErflR&amp;controls=0&amp;start=14',
    images: [
      'https://i.ibb.co/q3Q1Q9jz/4.png',
    ]
  },
  {
    id: 3,
    name: 'تبييض الأسنان',
    description: 'تبييض الأسنان بأمان وسرعة.',
    image: 'https://i.ibb.co/845KqMYc/image.png',
    duration: '1 ساعة',
    benefits: 'ابتسامة مشرقة، تحسين الثقة بالنفس.',
    moreInfo: 'استخدام ليزر آمن ومواد عالية الجودة.',
    details: 'تبييض الأسنان باستخدام ليزر آمن ومواد معتمدة عالميًا، مع نتائج فورية.',
    video: 'https://www.youtube.com/embed/4l9jGjp60t8?si=jTziq5BsHPPLf5qi&amp;controls=0',
    images: [
      'https://i.ibb.co/j9bHdMmn/6.jpg',
    ]
  },
  {
    id: 4,
    name: 'توريد اللثة',
    description: 'علاج تصبغ اللثة لتحسين المظهر.',
    image: 'https://i.ibb.co/0pPXmJQ0/6.png',
    duration: '1 ساعة',
    benefits: 'لثة صحية ومظهر جمالي.',
    moreInfo: 'علاج بالليزر لتصحيح لون اللثة.',
    details: 'توريد اللثة باستخدام تقنيات ليزر متقدمة للحصول على لثة صحية ومظهر طبيعي.',
    video: 'https://www.youtube.com/embed/eY6wAabZOL0?si=QX0en0kg8suy-yUD&amp;controls=0',
    images: [
      'https://i.ibb.co/YF9LYyss/2.jpg',
    ]
  },
  {
    id: 5,
    name: 'حشو عادي',
    description: 'حشوات لعلاج التسوس بمواد آمنة.',
    image: 'https://i.ibb.co/Gvwwy0bR/7.png',
    duration: '45 دقيقة',
    benefits: 'إصلاح التسوس، حماية الأسنان.',
    moreInfo: 'حشوات متينة وآمنة.',
    details: 'حشوات عادية باستخدام مواد عالية الجودة لعلاج التسوس وحماية الأسنان.',
    video: 'https://www.youtube.com/embed/fm208EgQUoU?si=oLRNMVboAmFbLOXh&amp;controls=0',
    images: [
      'https://i.ibb.co/DD7xDJ7t/8.jpg',
    ]
  },
  {
    id: 6,
    name: 'حشو تجميلي أمامي',
    description: 'حشوات تجميلية للأسنان الأمامية.',
    image: 'https://i.ibb.co/qFkk3Sgj/8.png',
    duration: '1 ساعة',
    benefits: 'مظهر طبيعي، تحسين الابتسامة.',
    moreInfo: 'حشوات مطابقة للون الأسنان.',
    details: 'حشوات تجميلية أمامية بمواد مطابقة للون الأسنان لتحسين المظهر.',
    video: 'https://www.youtube.com/embed/l3eYVoifbbQ?si=uoryJ9z0fTF_ymgy&amp;controls=0',
    images: [
      'https://i.ibb.co/dJGM2kzZ/3.jpg',
    ]
  },
  {
    id: 8,
    name: 'زراعة الأسنان',
    description: 'زراعة أسنان دائمة بجودة عالية.',
    image: 'https://i.ibb.co/1Y4VRVvS/image.jpg',
    duration: '3-6 أشهر',
    benefits: 'استعادة وظيفة الأسنان، مظهر طبيعي.',
    moreInfo: 'زراعة بتقنية 3D لضمان الدقة.',
    details: 'زراعة الأسنان باستخدام تقنية 3D لضمان الدقة والراحة، مع ضمان لمدة 5 سنوات.',
    video: 'https://www.youtube.com/embed/vjhHnTCSy0U?si=5Anxl3wlUnBerxPp&amp;controls=0',
    images: [
      'https://i.ibb.co/yncQJrPw/9.jpg',
    ]
  },
  {
    id: 9,
    name: 'تركيبات ثابتة',
    description: 'تركيبات أسنان دائمة لتحسين الوظيفة.',
    image: 'https://i.ibb.co/99Mp1jxr/1.jpg',
    duration: '2-4 أسابيع',
    benefits: 'متانة، مظهر طبيعي.',
    moreInfo: 'تركيبات زيركون وبورسلين.',
    details: 'تركيبات ثابتة باستخدام زيركون أو بورسلين لضمان المتانة والمظهر الطبيعي.',
    video: 'https://www.youtube.com/embed/qNKYxgSYwBk?si=3wrqdy5z3-XdfsoF&amp;controls=0&amp;start=40',
    images: [
      'https://i.ibb.co/4nGbLSKH/10.jpg',
    ]
  },
  {
    id: 10,
    name: 'تركيبات متحركة',
    description: 'تركيبات أسنان قابلة للإزالة.',
    image: 'https://i.ibb.co/S4kjtc5v/image.jpg',
    duration: '1-2 أسابيع',
    benefits: 'راحة، سهولة الاستخدام.',
    moreInfo: 'تركيبات مرنة ومتينة.',
    details: 'تركيبات متحركة مريحة وسهلة الاستخدام، مصممة حسب احتياجات المريض.',
    video: 'https://www.youtube.com/embed/vi6CKJmMkzk?si=g-lfqIAfU_K6JyAD&amp;controls=0',
    images: [
      'https://i.ibb.co/GQqVm7rc/11.jpg',
    ]
  },
  {
    id: 12,
    name: 'إعادة حشو عصب',
    description: 'إعادة علاج قنوات العصب للحالات السابقة.',
    image: 'https://i.ibb.co/mCzcY85S/image.jpg',
    duration: '1-2 ساعة',
    benefits: 'إصلاح العلاج السابق، الحفاظ على السن.',
    moreInfo: 'علاج دقيق بتقنيات متقدمة.',
    details: 'إعادة حشو قنوات العصب باستخدام تقنيات متقدمة لضمان نجاح العلاج.',
    video: 'https://www.youtube.com/embed/pQsd5nc6hAA?si=jSOZNdKJhlA7rfJa&amp;controls=0',
    images: [
      'https://i.ibb.co/Kx6wHHX7/12.jpg',
    ]
  },
  {
    id: 13,
    name: 'علاج الجذور',
    description: 'علاج جذور الأسنان بدقة عالية.',
    image: 'https://i.ibb.co/6JG8r6F9/11-1-625x615.jpg',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج جذور الأسنان باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/P3BJ6jR-_cI?si=pUy0-MTqyOib9tY7&amp;controls=0',
    images: [
      'https://i.ibb.co/LdBGW55W/13.jpg',
    ]
  },
  {
    id: 14,
    name: 'خلع عادي',
    description: 'خلع الأسنان بسهولة وأمان.',
    image: 'https://i.ibb.co/CRfFgfw/Screenshot-2025-08-24-194754.png',
    duration: '30 دقيقة',
    benefits: 'إزالة الأسنان التالفة، راحة فورية.',
    moreInfo: 'خلع بأقل ألم ممكن.',
    details: 'خلع الأسنان باستخدام تقنيات حديثة لضمان الراحة وتقليل الألم.',
    video: 'https://www.youtube.com/embed/RIhr32Ko-uY?si=jAahJUVXr7C41Bv1&amp;controls=0',
    images: [
      'https://i.ibb.co/RpDzLSg7/15.jpg',
    ]
  },
  {
    id: 15,
    name: 'خلع جراحي',
    description: 'خلع الأسنان المعقدة بإجراءات جراحية.',
    image: 'https://i.ibb.co/BVqf97Vz/Screenshot-2025-08-24-195954.png',
    duration: '1 ساعة',
    benefits: 'حل المشكلات المعقدة، راحة سريعة.',
    moreInfo: 'إجراءات جراحية دقيقة.',
    details: 'خلع جراحي باستخدام تقنيات متقدمة لضمان الدقة والراحة.',
    video: 'https://www.youtube.com/embed/FDS5v5nsN4U?si=NYcFwcIJXT5gFFnu&amp;controls=0&amp;start=30',
    images: [
      'https://i.ibb.co/dsrqZVvY/14.jpg',
    ]
  },
  {
    id: 16,
    name: 'تقويم الاسنان',
    description: 'تصحيح اعوجاج الأسنان وعدم انتظام محاذاة الفكين.',
    image: 'https://i.ibb.co/6cTQHtpT/2.jpg',
    duration: '6-24 شهر',
    benefits: 'تحسين المظهر الجمالي.',
    moreInfo: 'يمنح ابتسامة أكثر تناسقًا وجمالًا.',
    details: 'لا يقتصر دوره على الجماليات فقط، بل يعالج أيضًا مشكلات وظيفية في الفم.',
    video: 'https://www.youtube.com/embed/FDS5v5nsN4U?si=NYcFwcIJXT5gFFnu&amp;controls=0&amp;start=30',
    images: [
      'https://i.ibb.co/Q30h1C2Z/5.png',
    ]
  }
];

// مواعيد الأسبوع
const weekSchedule = {
  'الأحد': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الإثنين': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الثلاثاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الأربعاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الخميس': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الجمعة': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'السبت': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
};

// مواعيد محجوزة (مثال)
const bookedSlots = [
  { day: 'الأحد', time: '09:00 ص' },
  { day: 'الإثنين', time: '11:00 ص' },
];

// إخفاء الـ loader وإشعار ترحيبي
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }

  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي!',
    text: 'نقدم خدمات طب الأسنان بأحدث التقنيات، احجز موعدك الآن.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });

  // تحميل الوضع من localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
});

// قائمة الهامبرغر
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// تبديل الوضع النهاري/الليلي
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
  });
}

// عرض الخدمات ديناميكيًا
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  if (!servicesContainer || !serviceSelect) {
    console.error('خطأ: عنصر services-container أو service-select غير موجود');
    return;
  }

  servicesContainer.innerHTML = '';
  serviceSelect.innerHTML = '<option value="">اختر الخدمة</option>';
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.setAttribute('data-aos', 'fade-up');
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name} - مركز ريفولي لطب الأسنان" loading="lazy">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <button class="more-info neon-button" onclick="showServiceDetails(${service.id})" aria-label="مزيد من المعلومات عن ${service.name}">مزيد من المعلومات</button>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// عرض تفاصيل الخدمة في نافذة منبثقة
function showServiceDetails(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    Swal.fire({
      title: 'خطأ',
      text: 'الخدمة غير موجودة',
      icon: 'error',
      confirmButtonColor: '#4FC3F7',
      width: '95%',
      padding: '1rem'
    });
    return;
  }
  const sliderId = `swiper-${service.id}`;
  Swal.fire({
    title: service.name,
    html: `
      <p style="font-size: clamp(0.9rem, 2.5vw, 1.1rem); margin-bottom: 1rem; text-align: right;">${service.details}</p>
      <iframe src="${service.video}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="صورة ${service.name}" onclick="showFullImage('${img}')"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <button class="cta-button neon-button" onclick="bookService(${service.id})" aria-label="حجز خدمة ${service.name}">احجز الآن</button>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '95%',
    maxWidth: '900px',
    customClass: { popup: 'swal2-service-details' },
    didOpen: () => {
      new Swiper(`#${sliderId}`, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        touchRatio: 1.5
      });
    }
  });
}

// دالة لعرض الصورة كاملة
function showFullImage(imageSrc) {
  Swal.fire({
    imageUrl: imageSrc,
    imageAlt: 'صورة مكبرة',
    showConfirmButton: false,
    showCloseButton: true,
    width: '95%',
    padding: '1rem'
  });
}

// دالة للتعامل مع زر الحجز في النافذة المنبثقة
let isBookingFromPopup = false;
function bookService(serviceId) {
  const serviceSelect = document.getElementById('service-select');
  const bookingSection = document.getElementById('booking');
  const scheduleTable = document.getElementById('schedule-table');

  // التحقق من وجود العناصر
  if (!serviceSelect) {
    console.error('خطأ: عنصر service-select غير موجود');
    Swal.fire('خطأ', 'عنصر اختيار الخدمة غير متاح، يرجى التحقق من الصفحة.', 'error');
    return;
  }
  if (!bookingSection) {
    console.error('خطأ: قسم الحجز (#booking) غير موجود في الصفحة');
    Swal.fire('خطأ', 'قسم الحجز غير متاح، يرجى التحقق من الصفحة أو الاتصال بالدعم.', 'error');
    return;
  }
  if (!scheduleTable) {
    console.error('خطأ: جدول المواعيد (#schedule-table) غير موجود');
    Swal.fire('خطأ', 'جدول المواعيد غير متاح، يرجى التحقق من الصفحة.', 'error');
    return;
  }

  // تعيين الخدمة في القائمة المنسدلة
  isBookingFromPopup = true;
  serviceSelect.value = serviceId;

  // إظهار جدول المواعيد
  scheduleTable.style.display = 'block';

  // التأكد من أن قسم الحجز مرئي
  bookingSection.style.display = 'block';
  bookingSection.style.visibility = 'visible';
  bookingSection.style.opacity = '1';
  bookingSection.style.height = 'auto';
  bookingSection.style.overflow = 'visible';

  // إغلاق النافذة المنبثقة
  Swal.close();

  // التمرير إلى قسم الحجز
  setTimeout(() => {
    try {
      // محاولة التمرير باستخدام scrollIntoView
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } catch (error) {
      console.error('خطأ أثناء استخدام scrollIntoView:', error);
      // طريقة احتياطية باستخدام window.scrollTo
      const bookingRect = bookingSection.getBoundingClientRect();
      const offset = bookingRect.top + window.pageYOffset - 50; // هامش علوي 50 بكسل
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } finally {
      isBookingFromPopup = false;
    }
  }, 300); // تأخير 300 مللي ثانية
}

// سلايدر معرض الصور وإعدادات الحجز
document.addEventListener('DOMContentLoaded', () => {
  try {
    displayServices();
    displaySchedule();
    new Swiper('.gallery-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    // تهيئة AOS إذا كانت مستخدمة
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  } catch (error) {
    console.error('خطأ في عرض الخدمات، الجدول، أو السلايدر:', error);
    if (servicesContainer) {
      servicesContainer.innerHTML = '<p style="text-align: center; color: #D32F2F;">خطأ في تحميل الخدمات، يرجى المحاولة لاحقًا.</p>';
    }
  }

  const confirmButton = document.getElementById('confirm-booking');
  const patientName = document.getElementById('patient-name');
  const patientPhone = document.getElementById('patient-phone');
  const serviceSelect = document.getElementById('service-select');
  let selectedSlot = null;

  function displaySchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    if (!scheduleBody) {
      console.error('خطأ: عنصر schedule-body غير موجود');
      return;
    }
    scheduleBody.innerHTML = '';

    const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
    times.forEach(time => {
      const row = document.createElement('tr');
      ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].forEach(day => {
        const isBooked = bookedSlots.some(slot => slot.day === day && slot.time === time);
        const button = document.createElement('button');
        button.textContent = time;
        button.classList.add(isBooked ? 'booked' : 'available');
        if (isBooked) button.disabled = true;
        button.addEventListener('click', () => selectSlot(day, time, button));
        const td = document.createElement('td');
        td.appendChild(button);
        row.appendChild(td);
      });
      scheduleBody.appendChild(row);
    });
  }

  function selectSlot(day, time, button) {
    if (!serviceSelect || !serviceSelect.value) {
      Swal.fire('خطأ', 'يرجى اختيار الخدمة أولاً', 'error');
      return;
    }

    document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
      btn.classList.remove('selected');
      btn.classList.add('available');
    });

    button.classList.remove('available');
    button.classList.add('selected');
    selectedSlot = { day, time };
    if (confirmButton) {
      confirmButton.disabled = false;
    }

    Swal.fire({
      title: 'تم اختيار الموعد',
      text: `لقد اخترت يوم ${day} الساعة ${time}`,
      icon: 'info',
      confirmButtonText: 'موافق',
      confirmButtonColor: '#4FC3F7'
    });
  }

if (confirmButton) {
  confirmButton.addEventListener('click', () => {
    const serviceId = serviceSelect ? serviceSelect.value : '';
    const name = patientName ? patientName.value.trim() : '';
    const phone = patientPhone ? patientPhone.value.trim() : '';

    // التحقق من اكتمال البيانات
    if (!name || !phone || !serviceId || !selectedSlot) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى إدخال جميع البيانات واختيار موعد',
        icon: 'error',
        confirmButtonColor: '#4FC3F7'
      });
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى إدخال رقم هاتف صحيح (11 رقم)',
        icon: 'error',
        confirmButtonColor: '#4FC3F7'
      });
      return;
    }

    const service = services.find(s => s.id == serviceId);
    if (!service) {
      Swal.fire({
        title: 'خطأ',
        text: 'الخدمة المختارة غير صالحة',
        icon: 'error',
        confirmButtonColor: '#4FC3F7'
      });
      return;
    }

    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + 7);
    const formattedDate = bookingDate.toLocaleDateString('ar-EG');

    // تشكيل الرسالة مع تشفير دقيق للأحرف العربية
    const message = encodeURIComponent(
      `حجز جديد:\n` +
      `الاسم: ${name}\n` +
      `رقم الهاتف: ${phone}\n` +
      `الخدمة: ${service.name}\n` +
      `اليوم: ${selectedSlot.day}\n` +
      `الساعة: ${selectedSlot.time}\n` +
      `التاريخ: ${formattedDate}\n` +
      `رابط المركز: https://revoli-dental.com`
    ).replace(/%0A/g, '%0D%0A'); // تحسين فواصل الأسطر للواتساب

    console.log('رسالة واتساب:', decodeURIComponent(message)); // تسجيل الرسالة للتحقق

    // تعريف whatsappUrl
    const whatsappUrl = `https://wa.me/+201030956097?text=${message}`;

    // فحص صلاحية الرابط
    if (!whatsappUrl.startsWith('https://wa.me/')) {
      console.error('رابط واتساب غير صالح:', { whatsappUrl });
      Swal.fire({
        title: 'خطأ',
        text: 'رابط واتساب غير صالح. يرجى التواصل مع الدعم الفني.',
        icon: 'error',
        confirmButtonColor: '#4FC3F7'
      });
      return;
    }

    // فحص بيئة التشغيل
    const isSecure = window.location.protocol === 'https:';
    console.log('بيئة التشغيل:', {
      protocol: window.location.protocol,
      host: window.location.host,
      isSecure: isSecure,
      currentUrl: window.location.href
    });

    if (!isSecure) {
      console.warn('تحذير: الموقع يعمل على بيئة غير آمنة (http أو localhost). قد يمنع المتصفح التوجيه التلقائي.');
      Swal.fire({
        title: 'تحذير',
        text: 'الموقع يعمل على بيئة غير آمنة (http أو localhost). يرجى رفع الموقع على سيرفر آمن (https) لضمان عمل التوجيه التلقائي.',
        icon: 'warning',
        confirmButtonColor: '#4FC3F7'
      });
      return;
    }

    // عرض ملخص الحجز مع زر مباشر لواتساب
    Swal.fire({
      title: 'ملخص الحجز',
      html: `
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
        <p><strong>الخدمة:</strong> ${service.name}</p>
        <p><strong>اليوم:</strong> ${selectedSlot.day}</p>
        <p><strong>الساعة:</strong> ${selectedSlot.time}</p>
        <p><strong>التاريخ:</strong> ${formattedDate}</p>
        <br>
        <p>اضغط لإرسال الحجز عبر واتساب الآن:</p>
        <a href="${whatsappUrl}" id="whatsapp-direct-link" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 10px;">إرسال إلى واتساب</a>
      `,
      icon: 'success',
      confirmButtonText: 'تأكيد وإرسال تلقائيًا',
      cancelButtonText: 'إلغاء',
      showCancelButton: true,
      confirmButtonColor: '#4FC3F7',
      cancelButtonColor: '#D32F2F',
      didOpen: () => {
        // محاولة التوجيه التلقائي بعد فتح النافذة
        try {
          console.log('جاري التوجيه التلقائي إلى واتساب:', {
            whatsappUrl,
            userAgent: navigator.userAgent,
            protocol: window.location.protocol,
            currentUrl: window.location.href
          });
          window.location.href = whatsappUrl;
        } catch (error) {
          console.error('فشل التوجيه التلقائي:', {
            error: error.message,
            userAgent: navigator.userAgent,
            whatsappUrl: whatsappUrl,
            currentUrl: window.location.href,
            protocol: window.location.protocol,
            isSecure: isSecure
          });
          // لا نعرض إشعار فشل، الزر اليدوي موجود بالفعل
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        try {
          bookedSlots.push(selectedSlot);
          displaySchedule();
          if (patientName) patientName.value = '';
          if (patientPhone) patientPhone.value = '';
          if (serviceSelect) serviceSelect.value = '';
          if (scheduleTable) scheduleTable.style.display = 'none';
          if (confirmButton) confirmButton.disabled = true;

          // تسجيل محاولة التوجيه
          console.log('جاري التوجيه اليدوي إلى واتساب:', {
            whatsappUrl,
            userAgent: navigator.userAgent,
            protocol: window.location.protocol,
            currentUrl: window.location.href
          });

          // التوجيه التلقائي مرة أخرى عند التأكيد
          window.location.href = whatsappUrl;

        } catch (error) {
          console.error('خطأ أثناء إرسال بيانات الحجز إلى واتساب:', {
            error: error.message,
            userAgent: navigator.userAgent,
            whatsappUrl: whatsappUrl,
            currentUrl: window.location.href,
            protocol: window.location.protocol,
            isSecure: isSecure
          });
          Swal.fire({
            title: 'خطأ',
            html: `
              فشل إرسال الحجز إلى واتساب. يرجى التأكد من تثبيت تطبيق واتساب أو انقر على الرابط التالي لفتحه يدويًا:
              <br><br>
              <a href="${whatsappUrl}" target="_blank" style="color: #4FC3F7; text-decoration: underline;">فتح واتساب الآن</a>
              <br><br>
              أو انسخ الرسالة التالية وأرسلها يدويًا إلى +201030956097:
              <br>
              <textarea readonly style="width: 100%; height: 120px; margin-top: 10px; font-size: 14px;">${decodeURIComponent(message)}</textarea>
            `,
            icon: 'error',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#4FC3F7'
          });
        }
      }
    });
  });
}

  // تعديل حدث تغيير القائمة المنسدلة
  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => {
      if (isBookingFromPopup) {
        isBookingFromPopup = false;
        return;
      }
      const scheduleTable = document.getElementById('schedule-table');
      const bookingSection = document.getElementById('booking');
      if (serviceSelect.value && scheduleTable && bookingSection) {
        scheduleTable.style.display = 'block';
        bookingSection.style.display = 'block';
        bookingSection.style.visibility = 'visible';
        bookingSection.style.opacity = '1';
        bookingSection.style.height = 'auto';
        bookingSection.style.overflow = 'visible';
        setTimeout(() => {
          try {
            bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          } catch (error) {
            console.error('خطأ أثناء استخدام scrollIntoView في حدث القائمة:', error);
            const bookingRect = bookingSection.getBoundingClientRect();
            const offset = bookingRect.top + window.pageYOffset - 50;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }, 300);
      } else if (scheduleTable && confirmButton) {
        scheduleTable.style.display = 'none';
        confirmButton.disabled = true;
      }
    });
  }

  // إضافة bookService و showFullImage إلى النطاق العام
  window.bookService = bookService;
  window.showFullImage = showFullImage;
});

// خريطة Mapbox مع إحداثيات محدثة وزف "الذهاب إلى المركز" ظاهر باستمرار
function initMap() {
  try {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYXR5YTAwIiwiYSI6ImNtYWJxbTFoNDExNXEyanIwa2xxcmJwdWoifQ.0WU0DyTqRl9TjV-Go2O2LA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [31.24037666608025, 30.05329359703648], // إحداثيات محدثة
      zoom: 15
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const marker = new mapboxgl.Marker()
      .setLngLat([31.24037666608025, 30.05329359703648]) // إحداثيات محدثة
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3>مركز ريفولي لطب الأسنان</h3>
            <p>رامسيس، الأزبكية، القاهرة</p>
          `)
      )
      .addTo(map);

    // إضافة زر "الذهاب إلى المركز" تحت الخريطة
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const directionButton = document.createElement('a');
      directionButton.href = 'https://maps.app.goo.gl/ZHkwrt4XwrF24zHW9';
      directionButton.target = '_blank';
      directionButton.className = 'map-direction-btn';
      directionButton.textContent = 'الذهاب إلى المركز';
      directionButton.style.display = 'block';
      directionButton.style.margin = '10px auto';
      directionButton.style.textAlign = 'center';
      directionButton.style.padding = '10px';
      directionButton.style.backgroundColor = '#4FC3F7';
      directionButton.style.color = '#fff';
      directionButton.style.textDecoration = 'none';
      directionButton.style.borderRadius = '5px';
      directionButton.style.width = 'fit-content';
      mapElement.insertAdjacentElement('afterend', directionButton);
    }
  } catch (error) {
    console.error('خطأ في تحميل خريطة Mapbox:', error);
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.innerHTML = '<p style="text-align: center; color: #D32F2F;">فشل تحميل الخريطة، يرجى المحاولة لاحقًا.</p>';
      // إضافة زر "الذهاب إلى المركز" حتى لو فشلت الخريطة
      const directionButton = document.createElement('a');
      directionButton.href = 'https://maps.app.goo.gl/ZHkwrt4XwrF24zHW9';
      directionButton.target = '_blank';
      directionButton.className = 'map-direction-btn';
      directionButton.textContent = 'الذهاب إلى المركز';
      directionButton.style.display = 'block';
      directionButton.style.margin = '10px auto';
      directionButton.style.textAlign = 'center';
      directionButton.style.padding = '10px';
      directionButton.style.backgroundColor = '#4FC3F7';
      directionButton.style.color = '#fff';
      directionButton.style.textDecoration = 'none';
      directionButton.style.borderRadius = '5px';
      directionButton.style.width = 'fit-content';
      mapElement.insertAdjacentElement('afterend', directionButton);
    }
  }
}

// زر العودة للأعلى
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// تحميل الخريطة عند التمرير إليها (تحسين الأداء)
const mapSection = document.getElementById('contact');
if (mapSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      initMap();
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  observer.observe(mapSection);
}

// دعم اللغة الافتراضية
document.documentElement.lang = navigator.language || 'ar';

/* ========== Online Consultation Modal & Image Upload ========== */
// imgbbKey: ضع مفتاح imgbb الخاص بك هنا

// فتح وغلق نافذة الاستشارة
const modal = document.getElementById('consultation-modal');
const onlineBtn = document.getElementById('online-consultation-btn');
const closeBtn = modal.querySelector('.close');
const cancelBtn = modal.querySelector('#cancel-consultation');
onlineBtn.onclick = () => modal.classList.add('active');
closeBtn.onclick = cancelBtn.onclick = () => resetConsultModal();
window.onclick = e => { if(e.target === modal) resetConsultModal(); };
function resetConsultModal() {
  modal.classList.remove('active');
  document.getElementById('consultation-form').reset();
  document.getElementById('uploaded-images').innerHTML = '';
  uploadedFiles = [];
}

// رفع الصور إلى imgbb
let uploadedFiles = [];
const uploadArea = modal.querySelector('.file-upload-area');
const imgInput = document.getElementById('consult-images');
uploadArea.onclick = () => imgInput.click();
imgInput.onchange = function() { handleFileInput(this.files); }
uploadArea.ondragover = e => { e.preventDefault(); uploadArea.style.background="#e6f9ff";}
uploadArea.ondragleave = e => { e.preventDefault(); uploadArea.style.background="";}
uploadArea.ondrop = function(e) {
  e.preventDefault();
  handleFileInput(e.dataTransfer.files);
  uploadArea.style.background="";
};
function handleFileInput(files){
  let list = Array.from(files).slice(0,5-uploadedFiles.length); // max 5
  if(list.length === 0) return;
  list.forEach(file => {
    if(!file.type.startsWith('image/')) return;
    let reader = new FileReader();
    reader.onload = function(ev) {
      let img = document.createElement('img');
      img.src = ev.target.result;
      document.getElementById('uploaded-images').appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  uploadedFiles = uploadedFiles.concat(list);
}

function uploadImagesToImgbb(files){
  // إرجاع وعود رفع لكل صورة - نتائجها عبارة عن روابط الصور النهائية على imgbb
  return Promise.all(files.map(f =>
    fetch('https://api.imgbb.com/1/upload?key='+imgbbKey, {
      method:'POST',
      body: (() => {
        let data = new FormData(); data.append('image', f); return data;
      })()
    }).then(resp=>resp.json()).then(res=>res.data.display_url)
  ));
}

// إرسال بيانات الاستشارة
const form = document.getElementById('consultation-form');
form.onsubmit = async function(e){
  e.preventDefault();
  const name = form['name'].value.trim();
  const phone = form['phone'].value.trim();
  const age = form['age'].value.trim();
  const issue = form['issue'].value.trim();
  if(!name || !phone || !issue) return alert('يرجى ملء جميع الحقول المطلوبة');
  // رفع الصور
  let links = uploadedFiles.length ? await uploadImagesToImgbb(uploadedFiles) : [];
  // بناء نص الرسالة
  let msg = `👨‍⚕️ بيانات استشارة أونلاين:\n`;
  msg += `الاسم: ${name}\nرقم الهاتف: ${phone}`;
  if(age) msg += `\nالعمر: ${age}`;
  msg += `\nتفاصيل الحالة: ${issue}`;
  if(links.length) {
    msg += `\nصور الحالة:`;
    links.forEach(url => msg+= `\n${url}`);
  }
  // تكويد نص الرسالة للواتساب
  let waMsg = encodeURIComponent(msg);
  let waHref = `https://wa.me/+201030956097?text=${waMsg}`;
  window.open(waHref, '_blank');
  resetConsultModal();
}

/* ========== صور المعرض Lightbox ========== */
const galleryImages = document.querySelectorAll('.gallery-image');
// جمع كل src والصور
const allImgs = Array.from(galleryImages).map(img=>img.src);
let idx = 0;
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const currentNum = document.getElementById('current-image');
const totalNum = document.getElementById('total-images');
function showLightbox(i){
  idx = i;
  lightboxImg.src = allImgs[idx];
  currentNum.textContent = idx+1;
  totalNum.textContent = allImgs.length;
  lightbox.classList.add('active');
}
galleryImages.forEach((img,i)=>{
  img.style.cursor = 'zoom-in';
  img.onclick = ()=>showLightbox(i);
});
document.querySelector('.lightbox-close').onclick = ()=>lightbox.classList.remove('active');
document.getElementById('prev-image').onclick = e => { idx=(idx-1+allImgs.length)%allImgs.length; showLightbox(idx);}
document.getElementById('next-image').onclick = e => { idx=(idx+1)%allImgs.length; showLightbox(idx);}
lightbox.onclick = e => { if(e.target === lightbox) lightbox.classList.remove('active'); }
document.onkeydown = e => { if(!lightbox.classList.contains('active')) return;
  if(e.key==='ArrowLeft') document.getElementById('prev-image').click();
  if(e.key==='ArrowRight') document.getElementById('next-image').click();
  if(e.key==='Escape') lightbox.classList.remove('active');
};

/* أي أكواد تخص interaction أو تحسينات تحتفظ بكامل الخصائص دون حذف وظائف قائمة */


