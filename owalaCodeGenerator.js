const Price_Before_Discount = document.querySelector('div[role="cell"] strong.notranslate')?.textContent

const influencerNames = [
    // Female influencer names
    'Ava', 'Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia', 'Amelia', 'Harper', 'Evelyn', 'Abigail',
    'Emily', 'Ella', 'Elizabeth', 'Camila', 'Luna', 'Sofia', 'Avery', 'Mila', 'Aria', 'Scarlett',
    'Penelope', 'Layla', 'Chloe', 'Victoria', 'Madison', 'Eleanor', 'Grace', 'Nora', 'Riley', 'Zoey',
    'Hannah', 'Hazel', 'Lily', 'Ellie', 'Violet', 'Lillian', 'Zoe', 'Stella', 'Aurora', 'Natalie',
    // Male influencer names
    'Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin', 'Lucas', 'Henry', 'Alexander',
    'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo',
    'Jack', 'Owen', 'Theodore', 'Aiden', 'Samuel', 'Joseph', 'John', 'David', 'Wyatt', 'Matthew',
    'Luke', 'Asher', 'Carter', 'Julian', 'Grayson', 'Leo', 'Jayden', 'Gabriel', 'Isaac', 'Lincoln',
    'Anthony', 'Hudson', 'Dylan', 'Ezra', 'Thomas', 'Charles', 'Christopher', 'Jaxon', 'Maverick', 'Josiah',
  ];
const influencerCount = influencerNames.length;

function generateOwalaCode() {
    // Owala codes follow three known formats:
    // 1. OWALA<LLD> (where LL is two letters and D is a digit)
    // 2. OWALA<LDD> (where L is a letter and DD is two digits)
    // 3. <influencerName><L>15 (where influencerName is a string and L is a letter, followed by 15)
    // This function randomly generates one of these formats.
    const prefix = 'OWALA';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const useInfluencerPattern = Math.random() < 0.5;
  
    if (useInfluencerPattern) {
        const name = influencerNames[Math.floor(Math.random() * influencerCount)];
        const letter = letters[Math.floor(Math.random() * 26)];
        return name + letter + '15';
    } else {
        const isLetterLetterDigit = Math.random() < 0.5;
        if (isLetterLetterDigit) {
            const ll = letters[Math.floor(Math.random() * 26)] + letters[Math.floor(Math.random() * 26)];
            const d = Math.floor(Math.random() * 10);
            return prefix + ll + d;
        } else {
            const l = letters[Math.floor(Math.random() * 26)];
            const dd = ('0' + Math.floor(Math.random() * 100)).slice(-2);
            return prefix + l + dd;
      }
    }
  }

let price = document.querySelector('div[role="cell"] strong.notranslate')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const errorMsg = document.getElementById('error-for-ReductionsInput0')
while(price.textContent === Price_Before_Discount) {
    let owalaValue = generateOwalaCode();
    const input = document.querySelector('#ReductionsInput0');
    input.focus();
    input.value = owalaValue;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(2000);
    let button = document.querySelector('button[aria-label="Apply Discount Code"]')

    
    if((button.textContent === "Apply") && document.getElementById("ReductionsInput0") !== "") {button.click()}
    await sleep(Math.random() * 1000 + 3000);  // Introduce some randomness in the delay to seem more human-like
}