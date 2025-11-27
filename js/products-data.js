// --- 1. THE PRODUCT DATABASE ---
// This central file holds the data for both English and Arabic pages.
const products = [
    {
        id: 1,
        title: "AgroGold Liquid",
        title_ar: "أجروغولد السائل",
        image: "assets/product_liquid.png",
        badges: ["Liquid", "High Conc"],
        badges_ar: ["سائل", "تركيز عالٍ"],
        crops: ["Cereals", "Fruits"],
        crops_ar: ["حبوب", "فواكه"],
        shortDesc: "Premium foliar fertilizer for rapid absorption.",
        shortDesc_ar: "سماد ورقي ممتاز لامتصاص سريع.",
        fullDesc: "AgroGold is our flagship liquid formulation designed for immediate nutrient uptake during critical growth stages. It features advanced chelation technology to ensure stability.",
        fullDesc_ar: "أجروغولد هو تركيبة سائلة رائدة مصممة لامتصاص المغذيات الفوري خلال مراحل النمو الحرجة. يتميز بتقنية التخليب المتقدمة لضمان الاستقرار.",
        composition: [
            { element: "Nitrogen (N)", value: "20% w/v", element_ar: "نيتروجين (ن)", value_ar: "20% و/ح" },
            { element: "Phosphorus (P2O5)", value: "20% w/v", element_ar: "فوسفور (P2O5)", value_ar: "20% و/ح" },
            { element: "Potassium (K2O)", value: "20% w/v", element_ar: "بوتاسيوم (K2O)", value_ar: "20% و/ح" },
            { element: "Amino Acids", value: "2%", element_ar: "أحماض أمينية", value_ar: "2%" }
        ],
        application: {
            foliar: "2-3 L/ha",
            fertigation: "5-10 L/ha"
        }
    },
    {
        id: 2,
        title: "Emerald Grow",
        title_ar: "إيميرالد جرو",
        image: "assets/product_granular.png",
        badges: ["Granular", "Slow Release"],
        badges_ar: ["حبوب", "إطلاق بطيء"],
        crops: ["Ornamentals", "Fruits"],
        crops_ar: ["نباتات الزينة", "فواكه"],
        shortDesc: "Balanced NPK complex for soil application.",
        shortDesc_ar: "مركب NPK متوازن لتطبيقات التربة.",
        fullDesc: "Emerald Grow utilizes polymer-coating technology to release nutrients over 3 months, reducing leaching and ensuring consistent feeding.",
        fullDesc_ar: "يستخدم إيميرالد جرو تقنية الطلاء بالبوليمر لإطلاق العناصر الغذائية على مدى 3 أشهر، مما يقلل من الغسيل ويضمن تغذية متسقة.",
        composition: [
            { element: "Nitrogen (N)", value: "12%", element_ar: "نيتروجين (ن)", value_ar: "12%" },
            { element: "Phosphorus (P)", value: "12%", element_ar: "فوسفور (ف)", value_ar: "12%" },
            { element: "Potassium (K)", value: "17%", element_ar: "بوتاسيوم (ب)", value_ar: "17%" },
            { element: "Magnesium (MgO)", value: "2%", element_ar: "ماغنيسيوم (MgO)", value_ar: "2%" }
        ],
        application: {
            soil: "200-300 kg/ha"
        }
    },
    {
        id: 3,
        title: "BioVital Boost",
        title_ar: "بايوفيتال بوست",
        image: "assets/product_liquid.png",
        badges: ["Organic", "Eco-Friendly"],
        badges_ar: ["عضوي", "صديق للبيئة"],
        crops: ["Cereals", "Fruits", "Ornamentals"],
        crops_ar: ["حبوب", "فواكه", "نباتات الزينة"],
        shortDesc: "Organic biostimulant for stress resistance.",
        shortDesc_ar: "محفز حيوي عضوي لمقاومة الإجهاد.",
        fullDesc: "Derived from Ascophyllum nodosum seaweed, BioVital enhances the plant's natural immune system against drought and heat stress.",
        fullDesc_ar: "مشتق من الأعشاب البحرية (Ascophyllum nodosum)، يعزز BioVital جهاز المناعة الطبيعي للنبات ضد إجهاد الجفاف والحرارة.",
        composition: [
            { element: "Organic Matter", value: "45%", element_ar: "المادة العضوية", value_ar: "45%" },
            { element: "Alginic Acid", value: "15%", element_ar: "حمض الألجنيك", value_ar: "15%" },
            { element: "Cytokinins", value: "300 ppm", element_ar: "السيتوكينات", value_ar: "300 جزء في المليون" }
        ],
        application: { foliar: "1-2 L/ha", fertigation: "3-5 L/ha" }
    }
];

// --- 2. COMMON FUNCTIONS (Language Agnostic) ---

const getProduct = (id) => products.find(p => p.id === id);

// Helper to get the correct translated text
function getLocalizedText(item, key, lang) {
    return lang === 'ar' ? item[`${key}_ar`] || item[key] : item[key];
}

// Function to find the translation for fixed UI strings
function getUIText(key, lang) {
    const uiStrings = {
        'en': {
            'products_h1': 'Nutritional Solutions',
            'products_p': 'Advanced formulas for every crop and growth stage.',
            'view_details': 'View Details',
            'no_products': 'No products found',
            'adjust_filters': 'Try adjusting your filters.',
            'type_title': 'Product Type',
            'app_title': 'Application',
            'crop_title': 'Crop Focus',
            'element': 'Element',
            'conc': 'Concentration',
            'comp_title': 'Technical Composition',
            'app_guide': 'Application Guide',
            'request_quote': 'Request Quote',
            'sds_sheet': 'SDS Sheet',
            // Filter options (must match value attribute)
            'Liquid': 'Liquid Fertilizers',
            'Granular': 'Granular',
            'Powder': 'Water Soluble Powder',
            'Organic': 'Biostimulants',
            'foliar': 'Foliar',
            'soil': 'Soil Application',
            'fertigation': 'Fertigation',
            'Cereals': 'Cereals',
            'Fruits': 'Fruits & Vegetables',
            'Ornamentals': 'Ornamentals'
        },
        'ar': {
            'products_h1': 'حلول التغذية',
            'products_p': 'تركيبات متقدمة لكل محصول ومرحلة نمو.',
            'view_details': 'عرض التفاصيل',
            'no_products': 'لا يوجد منتجات',
            'adjust_filters': 'يرجى تعديل الفلاتر.',
            'type_title': 'نوع المنتج',
            'app_title': 'التطبيق',
            'crop_title': 'تركيز المحصول',
            'element': 'العنصر',
            'conc': 'التركيز',
            'comp_title': 'التركيبة الفنية',
            'app_guide': 'دليل التطبيق',
            'request_quote': 'طلب عرض سعر',
            'sds_sheet': 'ورقة بيانات السلامة',
            // Filter options
            'Liquid': 'الأسمدة السائلة',
            'Granular': 'الحبيبية',
            'Powder': 'مسحوق قابل للذوبان',
            'Organic': 'المحفزات الحيوية',
            'foliar': 'ورقي',
            'soil': 'تطبيق التربة',
            'fertigation': 'تسميد',
            'Cereals': 'الحبوب',
            'Fruits': 'الفواكه والخضروات',
            'Ornamentals': 'نباتات الزينة'
        }
    };
    return uiStrings[lang][key] || uiStrings['en'][key];
}

// --- 3. FILTER LOGIC ---
function setupFilters(lang) {
    const checkboxes = document.querySelectorAll('.filter-option input');
    checkboxes.forEach(box => {
        box.addEventListener('change', () => filterAndRender(lang));
    });
}

function filterAndRender(lang) {
    const activeTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
    const activeApps = Array.from(document.querySelectorAll('input[name="app"]:checked')).map(cb => cb.value);
    const activeCrops = Array.from(document.querySelectorAll('input[name="crop"]:checked')).map(cb => cb.value);

    const filtered = products.filter(product => {
        const matchesType = activeTypes.length === 0 || activeTypes.some(type => product.badges.includes(type));
        const productAppKeys = Object.keys(product.application);
        const matchesApp = activeApps.length === 0 || activeApps.some(app => productAppKeys.includes(app));
        const matchesCrop = activeCrops.length === 0 || activeCrops.some(crop => product.crops.includes(crop));

        return matchesType && matchesApp && matchesCrop;
    });

    renderProducts(filtered, lang);
}


// --- 4. RENDER AND MODAL LOGIC ---

function renderProducts(list, lang) {
    const container = document.getElementById('product-container');

    if (list.length === 0) {
        container.innerHTML = `<div style="text-align:center; grid-column: 1/-1; padding: 40px;">
            <h3>${getUIText('no_products', lang)}</h3>
            <p>${getUIText('adjust_filters', lang)}</p>
        </div>`;
        return;
    }

    container.innerHTML = list.map(product => {
        const title = getLocalizedText(product, 'title', lang);
        const shortDesc = getLocalizedText(product, 'shortDesc', lang);
        const badges = lang === 'ar' ? product.badges_ar : product.badges;
        const detailsText = getUIText('view_details', lang);

        return `
            <div class="product-card" onclick="openProductModal(${product.id}, '${lang}')">
                <img src="${product.image}" alt="${title}" class="product-img">
                <div class="product-info">
                    <div class="product-badges">
                        ${badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                    </div>
                    <h3 class="product-title">${title}</h3>
                    <p class="mb-sm">${shortDesc}</p>
                    <button class="btn btn-outline" style="width: 100%; padding: 8px;">${detailsText}</button>
                </div>
            </div>
        `;
    }).join('');
}


function openProductModal(id, lang) {
    const product = getProduct(id);
    if (!product) return;

    // 1. Text & Image
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalTitle').innerText = getLocalizedText(product, 'title', lang);
    document.getElementById('modalDesc').innerText = getLocalizedText(product, 'fullDesc', lang);
    document.getElementById('modalCompositionTitle').innerText = getUIText('comp_title', lang);
    document.getElementById('modalApplicationTitle').innerText = getUIText('app_guide', lang);
    document.getElementById('modalRequestQuote').innerText = getUIText('request_quote', lang);
    document.getElementById('modalSDS').innerHTML = `<i class="fas fa-file-pdf"></i> ${getUIText('sds_sheet', lang)}`;
    document.getElementById('modalCloseButton').setAttribute('aria-label', lang === 'ar' ? 'إغلاق' : 'Close');

    // 2. Badges
    const badgeContainer = document.getElementById('modalBadges');
    const badges = lang === 'ar' ? product.badges_ar : product.badges;
    badgeContainer.innerHTML = badges.map(b => `<span class="badge">${b}</span>`).join('');

    // 3. Composition Table
    const tableBody = document.getElementById('modalCompositionBody');
    document.getElementById('compositionHeader').innerHTML = `<th>${getUIText('element', lang)}</th><th>${getUIText('conc', lang)}</th>`;

    tableBody.innerHTML = product.composition.map(row => `
        <tr>
            <td>${getLocalizedText(row, 'element', lang)}</td>
            <td>${getLocalizedText(row, 'value', lang)}</td>
        </tr>
    `).join('');

    // 4. Application Rates
    const appContainer = document.getElementById('modalApplication');
    let appHTML = '';

    const renderAppIcon = (key, rate) => {
        let iconClass = '';
        let label = getUIText(key, lang);

        if (key === 'foliar') { iconClass = 'fa-spray-can'; }
        if (key === 'fertigation') { iconClass = 'fa-tint'; }
        if (key === 'soil') { iconClass = 'fa-seedling'; }

        return `
            <div class="text-center">
                <i class="fas ${iconClass}" style="font-size: 1.5rem; color: var(--color-emerald);"></i>
                <p style="font-size: 0.8rem; margin-top: 5px;">${label}<br><strong>${rate}</strong></p>
            </div>`;
    };

    for (const key in product.application) {
        if (product.application[key]) {
            appHTML += renderAppIcon(key, product.application[key]);
        }
    }
    appContainer.innerHTML = appHTML;

    // 5. Show Modal
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('productModal')) closeModal();
}

// Attach event listeners and render on DOM ready (called from HTML files)
// Example: document.addEventListener('DOMContentLoaded', () => { renderProducts(products, 'en'); setupFilters('en'); });