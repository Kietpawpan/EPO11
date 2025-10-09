document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const freshCanePercentSlider = document.getElementById('freshCanePercent');
    const freshCanePercentValue = document.getElementById('freshCanePercentValue');

    // Update slider value display
    freshCanePercentSlider.addEventListener('input', () => {
        freshCanePercentValue.textContent = `${freshCanePercentSlider.value}%`;
    });

    calculateBtn.addEventListener('click', () => {
        // 1. Get input values
        const totalSugarcane = parseFloat(document.getElementById('totalSugarcane').value);
        const basePrice = parseFloat(document.getElementById('basePrice').value);
        const burnFine = parseFloat(document.getElementById('burnFine').value);
        const freshPercent = parseFloat(document.getElementById('freshCanePercent').value);

        // 2. Calculate volumes
        const freshCaneVolume = totalSugarcane * (freshPercent / 100);
        const burnedCaneVolume = totalSugarcane - freshCaneVolume;

        // 3. Calculate total fine collected
        const totalFine = burnedCaneVolume * burnFine;

        // 4. Calculate premium for fresh cane
        // Avoid division by zero if there is no fresh cane
        const premiumPerTon = freshCaneVolume > 0 ? totalFine / freshCaneVolume : 0;

        // 5. Calculate final prices
        const finalFreshPrice = basePrice + premiumPerTon;
        const finalBurnedPrice = basePrice - burnFine;

        // 6. Calculate the final difference
        const priceDifference = finalFreshPrice - finalBurnedPrice;

        // 7. Display results
        document.getElementById('freshCaneVolume').textContent = freshCaneVolume.toLocaleString();
        document.getElementById('burnedCaneVolume').textContent = burnedCaneVolume.toLocaleString();
        document.getElementById('totalFine').textContent = totalFine.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('premiumPerTon').textContent = premiumPerTon.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('finalFreshPrice').textContent = finalFreshPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('finalBurnedPrice').textContent = finalBurnedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('priceDifference').textContent = priceDifference.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Show the results container
        document.getElementById('results').classList.remove('hidden');
    });
});