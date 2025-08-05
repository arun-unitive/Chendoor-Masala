// Handle video modal
        const videoModal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('testimonialVideo');
        
        videoModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const videoId = button.getAttribute('data-video');
            
            // You can replace these with actual video URLs
            const videoUrls = {
                'albert': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'courtney': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'leslie': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'john': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'sarah': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'michael': 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            };
            
            videoFrame.src = videoUrls[videoId] || '';
        });
        
        videoModal.addEventListener('hide.bs.modal', function () {
            videoFrame.src = '';
        });
        
        // Auto-play carousel
        const carousel = new bootstrap.Carousel(document.getElementById('testimonialsCarousel'), {
            interval: 5000,
            wrap: true
        });