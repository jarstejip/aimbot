// Elemen UI
const closePanelBtn = document.getElementById('closePanel');
const activateBtn = document.getElementById('activateBtn');
const statusText = document.getElementById('statusText');
const statusIndicator = document.getElementById('statusIndicator');
const accuracySlider = document.getElementById('accuracySlider');
const reactionSlider = document.getElementById('reactionSlider');
const headshotToggle = document.getElementById('headshotToggle');
const targetToggle = document.getElementById('targetToggle');
const visibilityToggle = document.getElementById('visibilityToggle');

let isActive = false;

// Tombol tutup panel
closePanelBtn.addEventListener('click', function() {
    document.querySelector('.floating-panel').style.opacity = '0';
    document.querySelector('.floating-panel').style.transform = 'translateY(-50%) translateX(100px)';
    setTimeout(() => {
        document.querySelector('.floating-panel').style.display = 'none';
        // Tampilkan tombol untuk memunculkan kembali panel
        const showPanelBtn = document.createElement('button');
        showPanelBtn.innerHTML = '<i class="fas fa-eye"></i> Tampilkan Panel';
        showPanelBtn.style.position = 'fixed';
        showPanelBtn.style.bottom = '20px';
        showPanelBtn.style.right = '20px';
        showPanelBtn.style.zIndex = '1001';
        showPanelBtn.className = 'btn btn-primary';
        showPanelBtn.id = 'showPanelBtn';
        document.body.appendChild(showPanelBtn);
        
        showPanelBtn.addEventListener('click', function() {
            document.querySelector('.floating-panel').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.floating-panel').style.opacity = '1';
                document.querySelector('.floating-panel').style.transform = 'translateY(-50%) translateX(0)';
            }, 10);
            this.remove();
        });
    }, 300);
});

// Tombol aktifkan/deaktifkan
activateBtn.addEventListener('click', function() {
    isActive = !isActive;
    
    if (isActive) {
        statusText.textContent = 'AKTIF';
        statusText.style.color = '#00ff00';
        statusIndicator.classList.add('status-active');
        activateBtn.innerHTML = '<i class="fas fa-power-off"></i> MATIKAN FANTASI AIMBOT';
        activateBtn.style.background = 'linear-gradient(to right, #00cc00, #009900)';
        
        // Efek visual saat diaktifkan
        document.body.style.animation = 'none';
        setTimeout(() => {
            document.body.style.animation = 'pulseEffect 0.5s';
        }, 10);
        
        // Tampilkan notifikasi
        showNotification('Fantasi Aimbot Diaktifkan!', 'success');
    } else {
        statusText.textContent = 'NON-AKTIF';
        statusText.style.color = '#ff3333';
        statusIndicator.classList.remove('status-active');
        activateBtn.innerHTML = '<i class="fas fa-rocket"></i> AKTIFKAN FANTASI AIMBOT';
        activateBtn.style.background = 'linear-gradient(to right, #ff3333, #cc0000)';
        
        // Tampilkan notifikasi
        showNotification('Fantasi Aimbot Dimatikan!', 'warning');
    }
});

// Update nilai slider
accuracySlider.addEventListener('input', function() {
    const value = this.value;
    const label = this.nextElementSibling.querySelector('span:nth-child(2)');
    let level = "Normal";
    
    if (value < 30) level = "Normal";
    else if (value < 70) level = "Medium";
    else if (value < 90) level = "Tinggi";
    else level = "Extreme";
    
    label.textContent = `${value}% (${level})`;
});

reactionSlider.addEventListener('input', function() {
    const value = this.value;
    const label = this.nextElementSibling.querySelector('span:nth-child(2)');
    let level = "Slow";
    
    if (value < 30) level = "Slow";
    else if (value < 70) level = "Medium";
    else if (value < 90) level = "Fast";
    else level = "Instant";
    
    label.textContent = `${value}% (${level})`;
});

// Fungsi notifikasi
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = 'bold';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
    notification.style.transition = 'all 0.3s';
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(to right, #00cc00, #009900)';
        notification.style.color = 'white';
        notification.style.borderLeft = '5px solid #00ff00';
    } else {
        notification.style.background = 'linear-gradient(to right, #ff9933, #cc6600)';
        notification.style.color = 'white';
        notification.style.borderLeft = '5px solid #ffcc00';
    }
    
    document.body.appendChild(notification);
    
    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Tambahkan style untuk efek pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulseEffect {
        0% { box-shadow: inset 0 0 0 0 rgba(0, 255, 0, 0); }
        50% { box-shadow: inset 0 0 50px 20px rgba(0, 255, 0, 0.2); }
        100% { box-shadow: inset 0 0 0 0 rgba(0, 255, 0, 0); }
    }
`;
document.head.appendChild(style);