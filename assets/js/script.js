// Vendor Data (without prices displayed to users)
        const vendorData = [
            // Makeup
            { id: 1, name: "Beauty by Amanda", category: "makeup", price: 5000000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Makeup artist profesional dengan pengalaman 8 tahun" },
            { id: 2, name: "Glamour Studio", category: "makeup", price: 4500000, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Tim makeup artist lengkap untuk pengantin dan keluarga" },
            
            // Foto & Videografi
            { id: 3, name: "Memory Captured", category: "photo", price: 8000000, image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Fotografer dan videografer profesional dengan peralatan lengkap" },
            { id: 4, name: "Visual Story", category: "photo", price: 10000000, image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis cinematic wedding video dan foto artistic" },
            
            // Dekorasi
            { id: 5, name: "Elegant Decor", category: "decor", price: 15000000, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Spesialis dekorasi pernikahan dengan konsep elegan" },
            { id: 6, name: "Floral Dreams", category: "decor", price: 12000000, image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dekorasi dengan bunga segar dan tema romantis" },
            
            // Entertainment
            { id: 7, name: "Harmony Band", category: "entertainment", price: 7000000, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Live band dengan repertoire lagu-lagu romantis" },
            { id: 8, name: "MC Professional", category: "entertainment", price: 3000000, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "MC berpengalaman untuk memandu acara pernikahan" },
            
            // Upacara Adat
            { id: 9, name: "Adat Jawa", category: "custom", price: 10000000, image: "https://images.unsplash.com/photo-1587502536575-6dfaba0e7b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Paket lengkap upacara adat Jawa dengan sesepuh" },
            { id: 10, name: "Adat Sunda", category: "custom", price: 8500000, image: "https://images.unsplash.com/photo-1587502537104-aac10ef65a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Pelaksanaan upacara adat Sunda yang autentik" },
            
            // WO Konten Kreator
            { id: 11, name: "Content Studio", category: "content", price: 5000000, image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Pembuatan konten kreatif untuk media sosial pernikahan" },
            
            // Venue
            { id: 12, name: "Grand Ballroom", category: "venue", price: 25000000, image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Venue mewah dengan kapasitas hingga 500 tamu" },
            { id: 13, name: "Garden Venue", category: "venue", price: 18000000, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Taman outdoor dengan suasana romantis dan natural" },
            
            // Catering
            { id: 14, name: "Royal Catering", category: "catering", price: 35000000, image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Katering premium dengan menu internasional untuk 200 tamu" },
            { id: 15, name: "Traditional Taste", category: "catering", price: 25000000, image: "https://images.unsplash.com/photo-1559314809-0f1556aae6aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Menu tradisional Indonesia dengan cita rasa autentik" },
            
            // Dessert & Foodcourt
            { id: 16, name: "Sweet Delights", category: "dessert", price: 8000000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dessert table dengan berbagai pilihan kue dan pastry" },
            { id: 17, name: "Foodcourt Variety", category: "dessert", price: 12000000, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Berbagai stan makanan untuk pengalaman kuliner yang beragam" },
          
            // MC
             { id: 18, name: "Sweet Delights", category: "mc", price: 8000000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Dessert table dengan berbagai pilihan kue dan pastry" },
            { id: 19, name: "Foodcourt Variety", category: "mc", price: 12000000, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", description: "Berbagai stan makanan untuk pengalaman kuliner yang beragam" }
        ];

        // Selected vendors array
        let selectedVendors = [];

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

        // Testimonial Slider
        const slides = document.querySelector('.testimonial-slides');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-arrow.prev');
        const nextBtn = document.querySelector('.slider-arrow.next');
        let currentSlide = 0;

        function showSlide(n) {
            if (n < 0) {
                currentSlide = dots.length - 1;
            } else if (n >= dots.length) {
                currentSlide = 0;
            } else {
                currentSlide = n;
            }
            
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        // Next slide
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Previous slide
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        // Dot click events
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto slide every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkScroll() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // Form Submission
        document.getElementById('consultation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.');
            this.reset();
        });

        // Vendor Modal Functionality
        const vendorModal = document.getElementById('vendorModal');
        const openModalBtn = document.getElementById('openVendorModal');
        const closeModalBtn = document.querySelector('.close-modal');
        const modalVendorGrid = document.getElementById('modalVendorGrid');
        const modalCategoryBtns = document.querySelectorAll('.modal-category-btn');
        const modalSelectedList = document.getElementById('modalSelectedList');
        const modalTotalPrice = document.getElementById('modalTotalPrice');
        const resetSelectionBtn = document.getElementById('resetSelection');
        const saveSelectionBtn = document.getElementById('saveSelection');
        const customPackageSummary = document.getElementById('customPackageSummary');
        const selectedVendorsList = document.getElementById('selectedVendorsList');
        const totalPrice = document.getElementById('totalPrice');

        // Open modal
        openModalBtn.addEventListener('click', () => {
            vendorModal.classList.add('active');
            renderVendorGrid('all');
            updateModalSelection();
        });

        // Close modal
        closeModalBtn.addEventListener('click', () => {
            vendorModal.classList.remove('active');
        });

        // Close modal when clicking outside
        vendorModal.addEventListener('click', (e) => {
            if (e.target === vendorModal) {
                vendorModal.classList.remove('active');
            }
        });

        // Modal category filtering
        modalCategoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalCategoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.getAttribute('data-category');
                renderVendorGrid(category);
            });
        });

        // Render vendor grid in modal
        function renderVendorGrid(category) {
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
            const index = selectedVendors.findIndex(v => v.id === vendor.id);
            
            if (index === -1) {
                // Add vendor to selection
                selectedVendors.push(vendor);
            } else {
                // Remove vendor from selection
                selectedVendors.splice(index, 1);
            }
            
            updateModalSelection();
            renderVendorGrid(document.querySelector('.modal-category-btn.active').getAttribute('data-category'));
        }

        // Update modal selection display
        function updateModalSelection() {
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
                
                selectedItem.querySelector('.remove-vendor').addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleVendorSelection(vendor);
                });
                
                modalSelectedList.appendChild(selectedItem);
            });
            
            modalTotalPrice.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
        }

        // Reset selection
        resetSelectionBtn.addEventListener('click', () => {
            selectedVendors = [];
            updateModalSelection();
            renderVendorGrid(document.querySelector('.modal-category-btn.active').getAttribute('data-category'));
        });

        // Save selection
        saveSelectionBtn.addEventListener('click', () => {
            vendorModal.classList.remove('active');
            updatePackageSummary();
        });

        // Update package summary on main page
        function updatePackageSummary() {
            if (selectedVendors.length > 0) {
                customPackageSummary.style.display = 'block';
                selectedVendorsList.innerHTML = '';
                let total = 0;
                
                selectedVendors.forEach(vendor => {
                    total += vendor.price;
                    
                    const vendorItem = document.createElement('div');
                    vendorItem.className = 'selected-item';
                    vendorItem.innerHTML = `
                        ${vendor.name}
                    `;
                    selectedVendorsList.appendChild(vendorItem);
                });
                
                totalPrice.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
            } else {
                customPackageSummary.style.display = 'none';
            }
        }

        // Text animation on hover
        const animatedTexts = document.querySelectorAll('.animated-text');
        
        animatedTexts.forEach(text => {
            text.addEventListener('mouseenter', () => {
                text.style.transform = 'scale(1.05)';
                text.style.transition = 'transform 0.3s ease';
            });
            
            text.addEventListener('mouseleave', () => {
                text.style.transform = 'scale(1)';
            });
        });

        // Order buttons functionality
        document.querySelectorAll('.btn-order').forEach(button => {
            button.addEventListener('click', function() {
                const packageName = this.getAttribute('data-package');
                const packagePrice = this.getAttribute('data-price');
                
                // Format WhatsApp message
                const message = `Halo, saya tertarik dengan ${packageName} seharga Rp ${parseInt(packagePrice).toLocaleString('id-ID')}. Bisakah saya mendapatkan informasi lebih lanjut?`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
                
                // Open WhatsApp
                window.open(whatsappUrl, '_blank');
            });
        });

        // Custom package order button
        document.querySelector('.btn-order-custom').addEventListener('click', function() {
            if (selectedVendors.length === 0) {
                alert('Silakan pilih vendor terlebih dahulu untuk paket custom.');
                return;
            }
            
            let total = 0;
            let vendorList = '';
            
            selectedVendors.forEach(vendor => {
                total += vendor.price;
                vendorList += `- ${vendor.name}\n`;
            });
            
            // Format WhatsApp message
            const message = `Halo, saya tertarik dengan Paket Custom dengan vendor berikut:\n${vendorList}\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nBisakah saya mendapatkan informasi lebih lanjut?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/6281327414126?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });

        // Initialize vendor grid with all vendors
        renderVendorGrid('all');