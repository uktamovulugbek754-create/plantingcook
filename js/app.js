/**
 * PlantingCook - High-Conversion 3D Showcase Controller
 * Handles 3D Card Tilt, Category Filtering, Urgency Timer, Modal Quick Views
 */

(function () {
  'use strict';

  // Product Database with verified affiliate URLs and details
  const PRODUCTS = [
    {
      id: 'plant-based-cookbook',
      category: 'plant-based',
      title: 'The Complete Plant-Based Cookbook',
      subtitle: '200+ Quick & Delicious Plant-Based Recipes Ready in 30 Mins or Less',
      badge: 'Instagram Choice',
      badgeClass: 'gold',
      featured: true,
      price: '$27',
      originalPrice: '$47',
      save: 'SAVE 42%',
      guarantee: '60-Day Money Back Guarantee',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/550988/uktamovulugbek2943a9b/',
      description: 'The ultimate plant-based kitchen bible for effortless everyday cooking. Stop spending hours in the kitchen—enjoy healthy, energizing meals using simple, accessible ingredients.',
      bullets: [
        '200+ Chef-crafted easy vegan & plant recipes',
        'Ready in 30 minutes or less (everyday ingredients)',
        'Includes 4 FREE high-value culinary bonus guides',
        'Instant digital PDF access on any phone, tablet, or PC'
      ]
    },
    {
      id: 'keto-recipes-77',
      category: 'keto',
      title: '77 Quick & Easy Keto-Recipes',
      subtitle: 'Delicious Low-Carb Meals You Can Prepare in Under 10 Minutes',
      badge: 'Flash Deal - 76% OFF',
      badgeClass: 'ruby',
      featured: true,
      price: '$7',
      originalPrice: '$29.95',
      save: '76% DISCOUNT',
      guarantee: '60-Day 100% Refund Guarantee',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/452961/uktamovulugbek2943a9b/',
      description: 'Bestselling cookbook designed for rapid fat loss and flat stomach results. No complex cooking skills, no rare ingredients. Real, delicious food prepared in minutes.',
      bullets: [
        '77 Tested recipes under 10 minutes preparation',
        'Designed specifically for effortless low-carb fat loss',
        '100% Satisfaction guarantee with instant download',
        'Limited promotion copies available for just $7'
      ]
    },
    {
      id: 'keto-meal-plans-15',
      category: 'keto',
      title: '15 Keto Meal Plans – Easy Recipe Pack',
      subtitle: '15-Day Breakfast & Lunch Rotation System for Decision-Free Keto',
      badge: 'Low-Carb Pack',
      badgeClass: 'emerald',
      featured: false,
      price: '$17',
      originalPrice: '$37',
      save: 'SAVE $20',
      guarantee: '60-Day Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.checkout-ds24.com/redir/630880/uktamovulugbek2943a9b/',
      description: 'Eliminate the daily exhausting question: "What should I eat today on keto?". Gives you a battle-tested 15-day rotation that removes decision fatigue completely.',
      bullets: [
        '15 Full breakfast & lunch rotation blueprints',
        'Made from popular, everyday low-carb ingredients',
        'Optional add-on: The Forbidden Keto Code ($7.99)',
        'Processed securely through Digistore24 encryption'
      ]
    },
    {
      id: 'pep-tonic',
      category: 'vitality',
      title: 'Pep-Tonic: Anti-Aging Superfood Drink',
      subtitle: 'World\'s First Cellular Rejuvenation Drink Powered by Nobel Science',
      badge: 'Cellular Health',
      badgeClass: 'gold',
      featured: true,
      price: '$49.95',
      originalPrice: '$69.95',
      save: 'FREE SHIPPING',
      guarantee: '90-Day "Feel The Difference" Guarantee',
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.advancedbionutritionals.com/DS24/Pep-Tonic/First-Anti-Aging-Drink/HD.htm#aff=uktamovulugbek2943a9b',
      description: 'Formulated by Dr. Greg Eckel. Contains Puremidine® to activate autophagy (clearing aging zombie cells) and MitoPrime® to recharge cellular mitochondria with 50+ superfoods.',
      bullets: [
        'Puremidine® triggers your body\'s natural cell renewal',
        'MitoPrime® shields cellular mitochondria from daily fatigue',
        '50+ Organic fruits, vegetables, prebiotic fiber & herbs',
        'Sweet, delicious refreshing taste – 90-Day money back'
      ]
    },
    {
      id: 'prime-perform-pro',
      category: 'vitality',
      title: 'Prime Perform Pro: Men\'s Vitality Formula',
      subtitle: 'Natural Botanical Blend for Peak Male Energy, Strength & Stamina',
      badge: 'Men\'s Health',
      badgeClass: 'emerald',
      featured: false,
      price: '$49',
      originalPrice: '$89',
      save: 'BUNDLE DEALS',
      guarantee: '60-Day Full Refund Policy',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://primeperformpro.com/welcome/#aff=uktamovulugbek2943a9b',
      description: 'Premium natural stamina supplement featuring Epimedium, Eurycoma Longifolia, Saw Palmetto, Wild Yam & Boron. Over 15,600 verified ratings worldwide.',
      bullets: [
        'Strategic combination of 7 key botanical extracts',
        'Free bonuses on 3 & 6 bottle orders ($200+ value)',
        'Manufactured in the USA in an FDA-registered facility',
        '100% Discreet packaging and guaranteed results'
      ]
    },
    {
      id: 'vip-special-offer',
      category: 'keto',
      title: 'VIP Exclusive Bonus Access',
      subtitle: 'Special Secret Discount & Additional Resources Pack',
      badge: 'Member Exclusive',
      badgeClass: 'ruby',
      featured: false,
      price: 'Special VIP',
      originalPrice: '$49',
      save: 'LIMITED',
      guarantee: 'Digistore24 Protected Order',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.checkout-ds24.com/redir/637564/uktamovulugbek2943a9b/',
      description: 'Exclusive gateway for followers of @preparingdeliciousplants to unlock direct wholesale affiliate rates and seasonal healthy lifestyle perks.',
      bullets: [
        'Direct encrypted gateway access',
        'Curated meal planning accelerators',
        '60-Day unconditional money-back guarantee',
        'Instant activation upon checkout'
      ]
    },
    {
      id: 'cook-better-meals',
      category: 'plant-based',
      title: 'How to Cook Better Meals Every Time',
      subtitle: 'Simple Core Cooking Techniques Any Home Cook Needs to Upgrade Flavor Instantly',
      badge: 'Chef Skills - $27',
      badgeClass: 'emerald',
      featured: false,
      price: '$27',
      originalPrice: '$97',
      save: 'SAVE $70',
      guarantee: '60-Day 100% Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.obedsco.com/cookingbetter#aff=uktamovulugbek2943a9b',
      description: 'A practical cooking guide teaching core seasoning, heat control, flavor layering, and texture timing. Fix mistakes before they ruin meals, starting with your very next kitchen session.',
      bullets: [
        'Master the 4 core elements behind great restaurant-quality meals',
        'Heat control & timing secrets to avoid dry or soggy food',
        'How to fix dishes that already taste "off" without starting over',
        'Instant digital PDF download — start reading in 60 seconds'
      ]
    },
    {
      id: 'low-carb-recipes-66',
      category: 'keto',
      title: 'The 66 Best Low-Carb Recipes in Under 10 Mins',
      subtitle: 'Delicious & Easy Low-Carb Recipes for Rapid Fat Loss & Flat Stomach',
      badge: 'Flash Deal - $7',
      badgeClass: 'ruby',
      featured: true,
      price: '$7',
      originalPrice: '$29.95',
      save: '76% OFF',
      guarantee: '60-Day 100% Satisfaction Guarantee',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/424858/uktamovulugbek2943a9b/',
      description: 'Never spend hours in the kitchen or give up delicious food. Over 66 tested, super-tasty everyday low-carb recipes made in less than 10 minutes for effortless weight loss.',
      bullets: [
        '66 Quick meals ready in under 10 minutes',
        'Simple everyday grocery ingredients — no complex prep',
        'Proven system for consistent low-carb fat loss',
        '100% Money-back guarantee within 60 days'
      ]
    },
    {
      id: 'glowgevity-gut-reset',
      category: 'vitality',
      title: 'Glowgevity 28-Day Gut & Inflammation Reset',
      subtitle: 'A Complete Step-by-Step Detox System to Reduce Inflammation & Restore Energy',
      badge: 'Gut & Detox',
      badgeClass: 'gold',
      featured: true,
      price: '$47',
      originalPrice: '$97',
      save: '51-PAGE PDF',
      guarantee: '60-Day Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.checkout-ds24.com/redir/681798/uktamovulugbek2943a9b/',
      description: 'Created by Penney Megginson (Physiotherapist & Certified Nutritionist). A comprehensive 51-page digital guide covering elimination protocols, detox meal plans, shopping lists, and post-detox food reintroduction.',
      bullets: [
        'Full 28-day gut reset & anti-inflammation roadmap',
        'Step-by-step elimination plan (sugar, gluten, dairy, caffeine)',
        'Nutrient-rich detox recipes, meal plans & full shopping lists',
        'Instant PDF download access on your thank-you page'
      ]
    },
    {
      id: 'carnivore-power-bundle',
      category: 'keto',
      title: 'Carnivore Power Bundle: 60-Day Plan + 100 Recipes',
      subtitle: 'Done-For-You Daily Meal Roadmap + 100 High-Protein Recipes for Autopilot Results',
      badge: '2-in-1 Bundle',
      badgeClass: 'gold',
      featured: true,
      price: '$27',
      originalPrice: '$117',
      save: 'SAVE $90',
      guarantee: '60-Day No-Questions-Asked Guarantee',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://healthhealing.net/carnivore-diet/aff#aff=uktamovulugbek2943a9b',
      description: 'Includes 2 complete books: "High-Protein Carnivore Diet Cookbook" (60-day roadmap) and "The Carnivore Century" (100 recipes). Built for beginners with budget-first cuts to crush cravings and eliminate decision fatigue.',
      bullets: [
        '60-Day daily roadmap: 3 meals/day with zero macro tracking',
        '100 High-protein recipes to prevent boredom & cravings',
        'Budget-first meat shopping strategy — simple cuts, simple prep',
        'Over 10,000+ readers with a 4.9/5 satisfaction rating'
      ]
    },
    {
      id: 'neuroxen-formula',
      category: 'vitality',
      title: 'NeuroXen: Peak Brain Focus & Neural Vitality',
      subtitle: 'Advanced Natural Formula for Mental Clarity, Memory Support & Daily Focus',
      badge: 'Brain Health',
      badgeClass: 'emerald',
      featured: false,
      price: 'Official Store',
      originalPrice: 'Direct Deal',
      save: 'VIP ACCESS',
      guarantee: '60-Day Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://getneuroxen.com/#aff=uktamovulugbek2943a9b',
      description: 'Scientifically formulated natural neural support. Helps eliminate brain fog, enhances mental sharpness, and supports optimal nervous system and auditory performance.',
      bullets: [
        'Targeted botanical & nutrient blend for cognitive clarity',
        'Supports long-term memory, mental agility & nerve health',
        'Manufactured under strict GMP & FDA-registered standards',
        'Direct verified manufacturer discount & bulk savings'
      ]
    },
    {
      id: 'fat-burner-formula',
      category: 'keto',
      title: 'The Fat Burner Formula',
      subtitle: '3 Simple Steps to Healthy, Consistent & Lasting Belly Fat Loss',
      badge: 'Flash Sale - $7',
      badgeClass: 'ruby',
      featured: true,
      price: '$7',
      originalPrice: '$29.95',
      save: '76% OFF',
      guarantee: '60-Day 100% Satisfaction Guarantee',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/428288/uktamovulugbek2943a9b/',
      description: 'Discover the 10 most effective weight loss secrets including the core Fat Burner Formula and TOP 5 slimming recipes to eliminate stubborn fat without starvation or extreme diets.',
      bullets: [
        'The 3-step fat burning blueprint for natural weight loss',
        'Includes TOP 5 rapid slimming recipes prepared in minutes',
        'No starvation, extreme workouts, or expensive ingredients',
        'Instant digital download with 60-day money-back guarantee'
      ]
    },
    {
      id: 'breakfast-recipes-55',
      category: 'plant-based',
      title: '55 Delicious Hearty Breakfast Recipes',
      subtitle: 'Quick & Healthy Everyday Breakfasts for a Flat Belly & Long-Lasting Energy',
      badge: 'Flash Deal - $7',
      badgeClass: 'ruby',
      featured: true,
      price: '$7',
      originalPrice: '$29.95',
      save: '76% DISCOUNT',
      guarantee: '60-Day Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/428276/uktamovulugbek2943a9b/',
      description: 'No more morning stress wondering what to eat. 55 tasty, nutrient-dense breakfast recipes designed to keep you satisfied longer and support daily healthy metabolism in minutes.',
      bullets: [
        '55 Quick morning recipes ready in just minutes',
        'Wholesome everyday ingredients the whole family loves',
        'Keeps you satiated without mid-morning energy crashes',
        'Digital PDF format with 60-day unconditional guarantee'
      ]
    },
    {
      id: 'raw-love-cookbook',
      category: 'plant-based',
      title: '100% RAW LOVE: Ultimate Raw Foodie Collection',
      subtitle: 'Favorite Tested Recipes from the World\'s Leading Raw Food & Plant Chefs',
      badge: '100% Raw Vegan',
      badgeClass: 'emerald',
      featured: false,
      price: '€19.97',
      originalPrice: '€39.00',
      save: '100-PAGE PDF',
      guarantee: 'Satisfaction Guarantee via Digistore24',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.digistore24.com/redir/42173/uktamovulugbek2943a9b/',
      description: '100 full-color pages of tried and tested gourmet raw food recipes from world-renowned culinary creators. Features smoothies, juices, healing soups, hearty mains, and decadent guilt-free raw desserts.',
      bullets: [
        '100-page comprehensive color digital PDF cookbook',
        'Exclusive contributions from leading global raw plant chefs',
        'Smoothies, super-salads, pad thai, pasta & raw desserts',
        'Instant digital download with verified Digistore24 security'
      ]
    },
    {
      id: 'eznaturals-moringa',
      category: 'vitality',
      title: 'EZNaturals Moringa Leaf Complex Capsules',
      subtitle: 'Pure Plant-Based Daily Moringa Ritual for Natural Energy, Immune & Digestive Support',
      badge: 'Pure Superfood',
      badgeClass: 'emerald',
      featured: true,
      price: '$53',
      originalPrice: '$69',
      save: 'BUNDLE VALUE',
      guarantee: '60-Day Money-Back Guarantee',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.checkout-ds24.com/redir/692712/uktamovulugbek2943a9b/',
      description: '100% Pure Moringa leaf powder in convenient vegetable capsules. Formulated for active adults seeking clean, steady plant-based energy, natural antioxidant defense, and digestive wellness without stimulants.',
      bullets: [
        '60 Pure vegetable capsules per bottle (no fillers)',
        'Rich in natural vitamins, minerals & protective antioxidants',
        'Supports daily natural stamina, immunity & digestion',
        'Official Digistore24 backed 60-day money-back guarantee'
      ]
    },
    {
      id: 'teslacare-terahertz',
      category: 'vitality',
      title: 'TeslaCare: Terahertz Bio-Healing & Energy Device',
      subtitle: 'Revolutionary 3-in-1 Cellular Therapy: Terahertz, Optical Quartz & Quantum Energy',
      badge: 'Breakthrough Tech',
      badgeClass: 'gold',
      featured: true,
      price: 'Save $500+',
      originalPrice: 'Retail Price',
      save: 'DIRECT DEAL',
      guarantee: '60-Day Money-Back & 1-Yr Warranty',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      affiliateUrl: 'https://www.checkout-ds24.com/redir/577873/uktamovulugbek2943a9b/',
      description: 'Non-invasive, handheld bio-resonance wellness wand. Utilizes Terahertz waves, fused optical quartz and scalar quantum energy to invigorate cellular vitality, soothe discomfort, and energize drinking water.',
      bullets: [
        '3-in-1 Core technology: Terahertz frequency + Optical quartz + Quantum',
        'Non-invasive, portable, safe and suitable for home wellness sessions',
        'Water conditioning feature — enhances hydration and cell uptake',
        'Backed by a 1-year manufacturer warranty and 60-day guarantee'
      ]
    }
  ];

  // Search & Filter Global State
  let activeCategory = 'all';
  let currentSearchQuery = '';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 1. Render Products Grid with Search & 3D Structure
  function renderProducts() {
    const grid = document.getElementById('products-grid');
    const counterEl = document.getElementById('search-results-counter');
    const clearBtn = document.getElementById('search-clear-btn');
    if (!grid) return;

    grid.innerHTML = '';

    const cleanQuery = currentSearchQuery.trim().toLowerCase();

    // Toggle Clear button visibility
    if (clearBtn) {
      if (cleanQuery.length > 0) {
        clearBtn.classList.add('visible');
        clearBtn.style.display = 'flex';
      } else {
        clearBtn.classList.remove('visible');
        clearBtn.style.display = 'none';
      }
    }

    const filtered = PRODUCTS.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      if (!matchCat) return false;

      if (!cleanQuery) return true;

      const titleMatch = (item.title || '').toLowerCase().includes(cleanQuery);
      const subtitleMatch = (item.subtitle || '').toLowerCase().includes(cleanQuery);
      const descMatch = (item.description || '').toLowerCase().includes(cleanQuery);
      const catMatch = (item.category || '').toLowerCase().includes(cleanQuery);
      const badgeMatch = (item.badge || '').toLowerCase().includes(cleanQuery);
      const bulletsMatch = (item.bullets || []).some(b => b.toLowerCase().includes(cleanQuery));

      return titleMatch || subtitleMatch || descMatch || catMatch || badgeMatch || bulletsMatch;
    });

    // Update Search Results Counter
    if (counterEl) {
      if (cleanQuery.length > 0 || activeCategory !== 'all') {
        counterEl.style.display = 'block';
        counterEl.innerHTML = `Showing <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'collection' : 'collections'}${cleanQuery ? ` for "<em>${escapeHtml(cleanQuery)}</em>"` : ''}`;
      } else {
        counterEl.style.display = 'none';
      }
    }

    // Empty Search Results State
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-search-state">
          <h3>No matching collections found</h3>
          <p>Try different keywords or explore our complete library below.</p>
          <button type="button" class="btn-primary-3d" id="reset-search-btn" style="display: inline-flex; width: auto; padding: 12px 28px; margin: 0 auto;">
            <span>✨ Show All 16 Collections</span>
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-search-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          currentSearchQuery = '';
          activeCategory = 'all';
          const searchInput = document.getElementById('product-search');
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
          });
          renderProducts();
        });
      }
      return;
    }

    filtered.forEach((item, index) => {
      const cardWrap = document.createElement('div');
      cardWrap.className = `card-3d-wrap ${item.featured ? 'featured' : ''}`;
      cardWrap.setAttribute('data-category', item.category);
      cardWrap.setAttribute('data-id', item.id);

      cardWrap.innerHTML = `
        <div class="card-3d-inner">
          <div class="card-glare"></div>
          
          <div class="layer-badge">
            <span class="deal-badge ${item.badgeClass}">
              <span>${item.badge}</span>
            </span>
          </div>

          <div class="card-visual-box">
            <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
            <span class="category-tag">${item.category.replace('-', ' ')}</span>
          </div>

          <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.subtitle}</p>

            <ul class="feature-bullets">
              ${item.bullets.slice(0, 3).map(bullet => `
                <li>
                  <svg viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span>${bullet}</span>
                </li>
              `).join('')}
            </ul>

            <div class="card-footer">
              <div class="price-row">
                <div class="price-group">
                  <span class="current-price ${item.badgeClass === 'gold' ? 'gold-text' : ''}">${item.price}</span>
                  <span class="original-price">${item.originalPrice}</span>
                </div>
                <span class="save-pill">${item.save}</span>
              </div>

              <div class="guarantee-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                <span>${item.guarantee}</span>
              </div>

              <div class="cta-button-group">
                <a href="${item.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-3d ${item.badgeClass === 'gold' ? 'gold-btn' : ''}" data-track="${item.id}">
                  <span>Claim Offer</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42L16.86 11H5v2z"/>
                  </svg>
                </a>
                <button type="button" class="btn-secondary-info" data-modal-id="${item.id}" aria-label="Quick Details">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(cardWrap);
      attachTiltEffect(cardWrap);
    });

    attachModalTriggers();
    attachAffiliateTracking();
  }

  // 2. Interactive 3D Tilt & Specular Physics
  function attachTiltEffect(card) {
    const inner = card.querySelector('.card-3d-inner');
    const glare = card.querySelector('.card-glare');
    if (!inner) return;

    let bounds;

    function onPointerEnter(e) {
      bounds = card.getBoundingClientRect();
      if (glare) glare.style.opacity = '1';
    }

    function onPointerMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (!clientX || !clientY) return;

      const posX = clientX - bounds.left;
      const posY = clientY - bounds.top;

      // Normalization from -1 to 1
      const normX = (posX / bounds.width - 0.5) * 2;
      const normY = (posY / bounds.height - 0.5) * 2;

      // Maximum 12 degrees tilt for elegant, natural feel
      const rotateX = -normY * 12;
      const rotateY = normX * 12;

      card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glare) {
        glare.style.background = `radial-gradient(circle at ${posX}px ${posY}px, rgba(255, 255, 255, 0.28), transparent 60%)`;
      }
    }

    function onPointerLeave() {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      if (glare) glare.style.opacity = '0';
      bounds = null;
    }

    card.addEventListener('mouseenter', onPointerEnter);
    card.addEventListener('mousemove', onPointerMove);
    card.addEventListener('mouseleave', onPointerLeave);

    // Mobile touch move (smooth response without page scroll interference)
    card.addEventListener('touchstart', onPointerEnter, { passive: true });
    card.addEventListener('touchmove', onPointerMove, { passive: true });
    card.addEventListener('touchend', onPointerLeave, { passive: true });
  }

  // 3. Category Filter Management
  function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeCategory = this.getAttribute('data-filter');
        renderProducts();
      });
    });
  }

  // 3b. Interactive Real-Time Search & Quick Tags Management
  function initSearch() {
    const searchInput = document.getElementById('product-search');
    const clearBtn = document.getElementById('search-clear-btn');
    const quickTags = document.querySelectorAll('.quick-tag-btn');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearchQuery = this.value;
        renderProducts();
      });

      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          this.value = '';
          currentSearchQuery = '';
          renderProducts();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        currentSearchQuery = '';
        renderProducts();
      });
    }

    quickTags.forEach(tagBtn => {
      tagBtn.addEventListener('click', function () {
        const tag = this.getAttribute('data-tag');
        quickTags.forEach(t => t.style.borderColor = '');
        this.style.borderColor = 'var(--emerald-400)';

        if (tag === 'all') {
          activeCategory = 'all';
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
          });
        } else if (['plant-based', 'keto', 'vitality'].includes(tag)) {
          activeCategory = tag;
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === tag);
          });
        } else {
          // keyword query
          currentSearchQuery = tag;
          if (searchInput) searchInput.value = tag;
        }
        renderProducts();
      });
    });
  }

  // 4. Urgency Countdown Timer (Evergreen 14h 35m)
  function initUrgencyTimer() {
    const timerEl = document.getElementById('deal-timer');
    if (!timerEl) return;

    let endTime = localStorage.getItem('plantingcook_timer_v1');
    const now = Date.now();

    if (!endTime || parseInt(endTime, 10) < now) {
      // Set to 14 hours 28 mins from now
      endTime = now + (14 * 3600 + 28 * 60) * 1000;
      localStorage.setItem('plantingcook_timer_v1', endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    function updateTimer() {
      const remaining = Math.max(0, endTime - Date.now());
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      const fH = String(hours).padStart(2, '0');
      const fM = String(minutes).padStart(2, '0');
      const fS = String(seconds).padStart(2, '0');

      timerEl.textContent = `${fH}:${fM}:${fS}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 5. Modal Quick View
  function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');
    if (!overlay) return;

    window.openQuickView = function (productId) {
      const item = PRODUCTS.find(p => p.id === productId);
      if (!item) return;

      document.getElementById('modal-img').src = item.image;
      document.getElementById('modal-title').textContent = item.title;
      document.getElementById('modal-desc').textContent = item.description;

      const bulletsContainer = document.getElementById('modal-bullets');
      bulletsContainer.innerHTML = item.bullets.map(b => `
        <li style="margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#34d399">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
          </svg>
          <span>${b}</span>
        </li>
      `).join('');

      const ctaBtn = document.getElementById('modal-cta');
      ctaBtn.href = item.affiliateUrl;
      ctaBtn.innerHTML = `<span>Get Instant Access (${item.price})</span>`;

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function attachModalTriggers() {
    document.querySelectorAll('.btn-secondary-info').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-modal-id');
        if (window.openQuickView) window.openQuickView(id);
      });
    });
  }

  // 6. Sticky Mobile Bottom Bar
  function initStickyBar() {
    const stickyBar = document.getElementById('sticky-mobile-bar');
    if (!stickyBar) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 380 && window.innerWidth <= 768) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    }, { passive: true });
  }

  // 7. FAQ Accordion
  function initFaq() {
    document.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', function () {
        const card = this.parentElement;
        const isOpen = card.classList.contains('open');

        // Close other FAQs
        document.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));

        if (!isOpen) {
          card.classList.add('open');
        }
      });
    });
  }

  // 8. Conversion Utility & Affiliate Click Tracking
  function attachAffiliateTracking() {
    document.querySelectorAll('a[data-track]').forEach(link => {
      link.addEventListener('click', function () {
        const targetId = this.getAttribute('data-track');
        console.log(`[Utilitarian Analytics] Outbound conversion redirect triggered: ${targetId}`);
        // Can be easily paired with Google Tag Manager, Meta Pixel or PostHog
      });
    });
  }

  // Initialization on DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    initFilters();
    initSearch();
    initUrgencyTimer();
    initModal();
    initStickyBar();
    initFaq();
  });
})();
