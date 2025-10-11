   // Vendor Data
const vendorData = [
    // Master of Ceremony
    { id: 46, name: "Riny Lusiana", category: "mc", price: 700000, image: "assets/img/riny.jpg", description: "MC berpengalaman untuk memandu acara pernikahan" },
    { id: 47, name: "Rizaludin Azmi", category: "mc", price: 700000, image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "MC dengan gaya interaktif dan menghibur" },
    { id: 48, name: "Iman Nugraha", category: "mc", price: 1350000, image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "MC yang fasih berbahasa Indonesia dan Inggris" },

    // Makeup
    { id: 1, name: "Ai make up", category: "makeup", price: 10000000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional dengan pengalaman 8 tahun" },
    { id: 2, name: "Aisyah Raini", category: "makeup", price: 7500000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Tim makeup artist lengkap untuk pengantin dan keluarga" },
    { id: 11, name: "Gina Fauzir", category: "makeup", price: 8000000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist premium dengan pengalaman 10+ tahun" },
    { id: 45, name: "Nourma Latifah", category: "makeup", price: 7500000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist premium dengan pengalaman 10+ tahun" },
    { id: 49, name: "She makeup", category: "makeup", price: 8000000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist premium dengan pengalaman 10+ tahun" },
    { id: 54, name: "Shinta HO", category: "makeup", price: 7000000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional untuk hari spesial Anda" },
    { id: 55, name: "Mayang KS", category: "makeup", price: 8000000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional untuk hari spesial Anda" },
    { id: 56, name: "Rosemini Makeup", category: "makeup", price: 7500000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional untuk hari spesial Anda" },
    { id: 57, name: "Tyna Rahim", category: "makeup", price: 7500000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional untuk hari spesial Anda" },

    // Foto & Videografi
    { id: 12, name: "Rayiraka Picture", category: "photo", price: 3000000, image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Fotografer dan videografer profesional dengan peralatan lengkap" },
    { id: 13, name: "Kemarin Sore", category: "photo", price: 6500000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
    { id: 50, name: "Cerita Kita Abadi", category: "photo", price: 2700000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
    { id: 51, name: "Sararay", category: "photo", price: 6300000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
    { id: 52, name: "Maxlomo", category: "photo", price: 3800000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
    { id: 53, name: "Zero pictura", category: "photo", price: 5000000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
    { id: 58, name: "Rizal Photograpy", category: "photo", price: 5000000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Fotografer profesional dengan hasil memukau" },

    // Dekorasi
    { id: 20, name: "Awside Decoration", category: "decor", price: 15000000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis dekorasi pernikahan dengan konsep elegan" },
    { id: 21, name: "Dais Decoration", category: "decor", price: 12000000, image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi dengan bunga segar dan tema romantis" },
    { id: 59, name: "Cantika Dekorasi", category: "decor", price: 6500000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi pernikahan yang indah dan berkesan" },
    { id: 60, name: "Piimow", category: "decor", price: 6000000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi pernikahan yang indah dan berkesan" },
    { id: 61, name: "Razfatih", category: "decor", price: 6000000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi pernikahan yang indah dan berkesan" },
    { id: 62, name: "Woodqueen", category: "decor", price: 6500000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi pernikahan yang indah dan berkesan" },
    { id: 63, name: "Raditya dekorasi", category: "decor", price: 10000000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi pernikahan yang indah dan berkesan" },

    // Entertainment
    { id: 29, name: "Blue Monday", category: "entertainment", price: 8000000, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Live band dengan repertoire lagu-lagu romantis" },
    { id: 64, name: "Symphony", category: "entertainment", price: 12000000, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Orkestra atau live music premium untuk pernikahan" },
    { id: 65, name: "Ritme music", category: "entertainment", price: 4750000, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Live music akustik atau band dengan harga terjangkau" },

    // Upacara Adat
    { id: 32, name: "Sanggar Seni Dewi Sukma", category: "custom", price: 10000000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Paket lengkap upacara adat Jawa dengan sesepuh" },
    { id: 66, name: "Gupay mitra", category: "custom", price: 4000000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis layanan upacara adat" },
    { id: 67, name: "Astagiri", category: "custom", price: 4000000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis layanan upacara adat" },
    { id: 68, name: "Giri marga", category: "custom", price: 3500000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis layanan upacara adat" },
    { id: 69, name: "Jws pro", category: "custom", price: 3800000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis layanan upacara adat" },

    // WO Konten Kreator
    { id: 37, name: "Svara Cinta Wedding Content Creator", category: "content", price: 5000000, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Konten kreator untuk dokumentasi pernikahan yang menarik" },
    { id: 70, name: "Svara cinta", category: "content", price: 350000, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Konten kreator untuk dokumentasi pernikahan yang menarik" },

    // Venue
    { id: 38, name: "De Jehan Hotel", category: "venue", price: 25000000, image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Venue mewah dengan kapasitas hingga 500 tamu" },
    { id: 39, name: "Santika Hotel", category: "venue", price: 18000000, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Taman outdoor dengan suasana romantis dan natural" },

    // Catering
    { id: 42, name: "Alma Catering", category: "catering", price: 35000000, image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Katering premium dengan menu internasional untuk 200 tamu" },
    { id: 71, name: "Aditya catering", category: "catering", price: 33000, image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Paket mawar (33rb/pack)" },
    { id: 72, name: "Alma catering (Prasmanan)", category: "catering", price: 38000, image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Prasmanan (38rb/pack)" },

    // Dessert & Foodcourt
    { id: 44, name: "Znj Dessert", category: "dessert", price: 8000000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dessert table dengan berbagai pilihan kue dan pastry" }
    ];

        // Selected vendors array
        let selectedVendors = [];

        // Create particles for hero section
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 10;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.mobile-menu i').classList.add('fa-bars');
                document.querySelector('.mobile-menu i').classList.remove('fa-times');
            });
        });

        // Sticky Navbar
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                header.style.padding = '0.5rem 0';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.padding = '1.2rem 0';
            }
        });

        // Package Tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Crew Slider
        const crewSlider = document.querySelector('.crew-slider');
        const crewCards = document.querySelectorAll('.crew-card');
        const crewDots = document.querySelectorAll('.crew-slider-container .slider-dot');
        const crewPrevBtn = document.querySelector('.crew-slider-container .slider-arrow.prev');
        const crewNextBtn = document.querySelector('.crew-slider-container .slider-arrow.next');
        let currentCrewSlide = 0;
        const crewSlideWidth = crewCards[0].offsetWidth + 32; // card width + margin

                function showCrewSlide(index) {
            if (index < 0) {
                currentCrewSlide = crewCards.length - 1;
            } else if (index >= crewCards.length) {
                currentCrewSlide = 0;
            } else {
                currentCrewSlide = index;
            }
            
            const offset = -currentCrewSlide * crewSlideWidth;
            crewSlider.style.transform = `translateX(${offset}px)`;
            
            // Update dots
            crewDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentCrewSlide);
            });
        }

        crewPrevBtn.addEventListener('click', () => {
            showCrewSlide(currentCrewSlide - 1);
        });

        crewNextBtn.addEventListener('click', () => {
            showCrewSlide(currentCrewSlide + 1);
        });

        crewDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showCrewSlide(i);
            });
        });

        // Collaboration Slider
        const collaborationSlides = document.querySelector('.collaboration-slides');
        const collaborationSlideItems = document.querySelectorAll('.collaboration-slide');
        const collaborationDots = document.querySelectorAll('.collaboration-slider-dot');
        const collaborationPrevBtn = document.querySelector('.collaboration-slider-arrow.prev');
        const collaborationNextBtn = document.querySelector('.collaboration-slider-arrow.next');
        let currentCollaborationSlide = 0;

        function showCollaborationSlide(index) {
            if (index < 0) {
                currentCollaborationSlide = collaborationSlideItems.length - 1;
            } else if (index >= collaborationSlideItems.length) {
                currentCollaborationSlide = 0;
            } else {
                currentCollaborationSlide = index;
            }
            
            const offset = -currentCollaborationSlide * 100;
            collaborationSlides.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            collaborationDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentCollaborationSlide);
            });
        }

        collaborationPrevBtn.addEventListener('click', () => {
            showCollaborationSlide(currentCollaborationSlide - 1);
        });

        collaborationNextBtn.addEventListener('click', () => {
            showCollaborationSlide(currentCollaborationSlide + 1);
        });

        collaborationDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showCollaborationSlide(i);
            });
        });

        // Testimonial Slider
        const testimonialSlides = document.querySelector('.testimonial-slides');
        const testimonialSlideItems = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonials .slider-dot');
        const testimonialPrevBtn = document.querySelector('.testimonials .slider-arrow.prev');
        const testimonialNextBtn = document.querySelector('.testimonials .slider-arrow.next');
        let currentTestimonialSlide = 0;

        function showTestimonialSlide(index) {
            if (index < 0) {
                currentTestimonialSlide = testimonialSlideItems.length - 1;
            } else if (index >= testimonialSlideItems.length) {
                currentTestimonialSlide = 0;
            } else {
                currentTestimonialSlide = index;
            }
            
            const offset = -currentTestimonialSlide * 100;
            testimonialSlides.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            testimonialDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentTestimonialSlide);
            });
        }

        testimonialPrevBtn.addEventListener('click', () => {
            showTestimonialSlide(currentTestimonialSlide - 1);
        });

        testimonialNextBtn.addEventListener('click', () => {
            showTestimonialSlide(currentTestimonialSlide + 1);
        });

        testimonialDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showTestimonialSlide(i);
            });
        });

        // Auto slide for collaboration and testimonial sliders
        setInterval(() => {
            showCollaborationSlide(currentCollaborationSlide + 1);
            showTestimonialSlide(currentTestimonialSlide + 1);
        }, 5000);

        // Vendor Modal Functionality
        const vendorModal = document.getElementById('vendorModal');
        const openVendorModalBtn = document.getElementById('openVendorModal');
        const closeVendorModalBtn = document.querySelector('.close-modal');
        const modalVendorGrid = document.getElementById('modalVendorGrid');
        const modalSelectedList = document.getElementById('modalSelectedList');
        const modalTotalPrice = document.getElementById('modalTotalPrice');
        const resetSelectionBtn = document.getElementById('resetSelection');
        const saveSelectionBtn = document.getElementById('saveSelection');
        const categoryBtns = document.querySelectorAll('.modal-category-btn');

        // Format currency
        function formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(amount);
        }

        // Render vendor cards
        function renderVendorCards(category = 'all') {
            modalVendorGrid.innerHTML = '';
            
            const filteredVendors = category === 'all' 
                ? vendorData 
                : vendorData.filter(vendor => vendor.category === category);
            
            filteredVendors.forEach(vendor => {
                const isSelected = selectedVendors.some(v => v.id === vendor.id);
                
                const vendorCard = document.createElement('div');
                vendorCard.className = `modal-vendor-card ${isSelected ? 'selected' : ''}`;
                vendorCard.setAttribute('data-id', vendor.id);
                
                vendorCard.innerHTML = `
                    <div class="modal-vendor-image">
                        <img src="${vendor.image}" alt="${vendor.name}">
                    </div>
                    <div class="modal-vendor-info">
                        <h4>${vendor.name}</h4>
                        <p>${vendor.description}</p>
                    </div>
                `;
                
                vendorCard.addEventListener('click', () => {
                    toggleVendorSelection(vendor);
                });
                
                modalVendorGrid.appendChild(vendorCard);
            });
        }

        // Toggle vendor selection
        function toggleVendorSelection(vendor) {
            const existingIndex = selectedVendors.findIndex(v => v.id === vendor.id);
            
            if (existingIndex > -1) {
                // Remove vendor if already selected
                selectedVendors.splice(existingIndex, 1);
            } else {
                // Add vendor if not selected
                selectedVendors.push(vendor);
            }
            
            updateSelectedVendorsDisplay();
            renderVendorCards(getCurrentCategory());
        }

        // Get current selected category
        function getCurrentCategory() {
            const activeCategoryBtn = document.querySelector('.modal-category-btn.active');
            return activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';
        }

        // Update selected vendors display
        function updateSelectedVendorsDisplay() {
            // Update modal display
            modalSelectedList.innerHTML = '';
            
            let total = 0;
            
            selectedVendors.forEach(vendor => {
                total += vendor.price;
                
                const selectedItem = document.createElement('div');
                selectedItem.className = 'selected-item';
                selectedItem.innerHTML = `
                    ${vendor.name}
                    <button class="remove-vendor" data-id="${vendor.id}">&times;</button>
                `;
                
                modalSelectedList.appendChild(selectedItem);
            });
            
            modalTotalPrice.textContent = `Total: ${formatCurrency(total)}`;
            
            // Update package section display
            const customPackageSummary = document.getElementById('customPackageSummary');
            const selectedVendorsList = document.getElementById('selectedVendorsList');
            const totalPrice = document.getElementById('totalPrice');
            
            if (selectedVendors.length > 0) {
                customPackageSummary.style.display = 'block';
                selectedVendorsList.innerHTML = '';
                
                selectedVendors.forEach(vendor => {
                    const vendorItem = document.createElement('div');
                    vendorItem.className = 'selected-item';
                    vendorItem.innerHTML = `
                        ${vendor.name} - ${formatCurrency(vendor.price)}
                    `;
                    selectedVendorsList.appendChild(vendorItem);
                });
                
                totalPrice.textContent = `Total: ${formatCurrency(total)}`;
            } else {
                customPackageSummary.style.display = 'none';
            }
        }

        // Category filter
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderVendorCards(btn.getAttribute('data-category'));
            });
        });

        // Remove vendor from selection
        modalSelectedList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-vendor')) {
                const vendorId = parseInt(e.target.getAttribute('data-id'));
                selectedVendors = selectedVendors.filter(v => v.id !== vendorId);
                updateSelectedVendorsDisplay();
                renderVendorCards(getCurrentCategory());
            }
        });

        // Reset selection
        resetSelectionBtn.addEventListener('click', () => {
            selectedVendors = [];
            updateSelectedVendorsDisplay();
            renderVendorCards(getCurrentCategory());
        });

        // Save selection
        saveSelectionBtn.addEventListener('click', () => {
            vendorModal.classList.remove('active');
            // Show success message
            alert('Pilihan vendor telah disimpan! Total paket custom: ' + modalTotalPrice.textContent);
        });

        // Open modal
        openVendorModalBtn.addEventListener('click', () => {
            vendorModal.classList.add('active');
            renderVendorCards();
            updateSelectedVendorsDisplay();
        });

        // Close modal
        closeVendorModalBtn.addEventListener('click', () => {
            vendorModal.classList.remove('active');
        });

        // Close modal when clicking outside
        vendorModal.addEventListener('click', (e) => {
            if (e.target === vendorModal) {
                vendorModal.classList.remove('active');
            }
        });

        // Order buttons
        document.querySelectorAll('.btn-order').forEach(btn => {
            btn.addEventListener('click', function() {
                const packageName = this.getAttribute('data-package');
                const packagePrice = this.getAttribute('data-price');
                
                const message = `Halo, saya tertarik dengan ${packageName} seharga ${formatCurrency(parseInt(packagePrice))}. Bisakah saya mendapatkan informasi lebih lanjut?`;
                const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
                
                window.open(whatsappUrl, '_blank');
            });
        });

        // Custom package order button
        document.querySelector('.btn-order-custom').addEventListener('click', function() {
            if (selectedVendors.length === 0) {
                alert('Silakan pilih vendor terlebih dahulu dengan mengklik "Pilih Vendor"');
                return;
            }
            
            let vendorList = '';
            let total = 0;
            
            selectedVendors.forEach(vendor => {
                vendorList += `- ${vendor.name}: ${formatCurrency(vendor.price)}\n`;
                total += vendor.price;
            });
            
            const message = `Halo, saya tertarik dengan Paket Custom dengan vendor berikut:\n${vendorList}\nTotal: ${formatCurrency(total)}\nBisakah saya mendapatkan informasi lebih lanjut?`;
            const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });

        // Consultation form
        document.getElementById('consultation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const weddingDate = document.getElementById('wedding-date').value;
            const message = document.getElementById('message').value;
            
            const consultationMessage = `Halo, saya ${name}.\nEmail: ${email}\nTelepon: ${phone}\nTanggal Pernikahan: ${weddingDate}\nPesan: ${message}\n\nSaya ingin berkonsultasi tentang paket pernikahan.`;
            const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(consultationMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            this.reset();
            
            // Show success message
            alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
        });

        // Scroll animations
        function checkScroll() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            renderVendorCards();
            checkScroll();
            
            window.addEventListener('scroll', checkScroll);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Add vendor scrolling animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .vendor-scroll > div {
                    width: max-content;
                }
            `;
            document.head.appendChild(style);
        });
