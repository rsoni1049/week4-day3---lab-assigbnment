document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('infoPopup');
    const popupHeading = document.getElementById('popupHeading');
    const popupText = document.getElementById('popupText');
    const closeBtn = document.querySelector('.close-btn');

    const imageInfo = [
        {
            heading: 'SNOWY FOREST',
            text: 'This breathtaking scene shows a dense forest completely covered in fresh snow. The pine trees create a beautiful contrast against the white landscape.'
        },
        {
            heading: 'FROZEN LAKE',
            text: 'A perfectly still frozen lake reflects the warm colors of the winter sunset. The ice is thick enough to walk on safely.'
        },
        {
            heading: 'WINTER SUNRISE',
            text: 'The rising sun casts golden hues through a canopy of snow-dusted trees. A peaceful start to a winter morning.'
        },
        {
            heading: 'MOUNTAIN VIEW',
            text: 'Jagged peaks pierce the sky, blanketed in snow and ice. A stunning panorama of a high alpine winter scene.'
        },
        {
            heading: 'WINTER CABIN',
            text: 'Nestled in the woods, this cozy cabin glows warmly amid a sea of white snow. A dream retreat from the cold.'
        },
        {
            heading: 'ICICLES',
            text: 'Close-up view of shimmering icicles hanging from a roof’s edge, glistening in the sunlight.'
        },
        {
            heading: 'WINTER ROAD',
            text: 'A winding snow-covered road leads deep into a quiet forest. A peaceful path to explore nature.'
        },
        {
            heading: 'NORTHERN LIGHTS',
            text: 'Dancing auroras light up the night sky over a frozen landscape, painting it with vibrant green and purple.'
        },
        {
            heading: 'WINTER VILLAGE',
            text: 'Quaint houses and snow-covered rooftops give this mountain village a magical feel. Smoke curls from chimneys into the crisp air.'
        },
        {
            heading: 'WINTER BRIDGE',
            text: 'A wooden bridge spans a frozen river, framed by trees heavy with snow. Tranquility at its finest.'
        }
    ];

    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            popupHeading.textContent = imageInfo[index].heading;
            popupText.textContent = imageInfo[index].text;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', e => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
