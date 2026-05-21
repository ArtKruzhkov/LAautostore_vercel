const btn = document.getElementById('addCoApplicant');
const sectionCoApplicant = document.getElementById('coApplicantSection');

let isAdded = false;
const emailjs = window.emailjs;
emailjs.init('q_LG4tqiapZ_XgtpU');

btn.addEventListener('click', () => {
  if (!isAdded) {
    addCoApplicant();
    isAdded = true;

    btn.querySelector('.btn-coapplicant__icon').textContent = '−';
    btn.querySelector('.btn-coapplicant__text').textContent = 'Remove Co-Applicant';

    setTimeout(() => {
      const title = document.getElementById('coApplicantTitle');
      if (title) {
        title.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  } else {
    removeCoApplicant();
    isAdded = false;

    btn.querySelector('.btn-coapplicant__icon').textContent = '+';
    btn.querySelector('.btn-coapplicant__text').textContent = 'Add Co-Applicant';
  }
});

function addCoApplicant() {
  form.has_co_applicant.value = 'yes';
  sectionCoApplicant.innerHTML = `
    
    <!-- CONTACT -->
    <div>
      <h3 id="coApplicantTitle" class="text-lg font-semibold text-white mb-4">
        Co-Applicant Information
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input name="co_first_name" type="text" placeholder="* First Name" class="form-input" required />
        </div>
        <div>
          <input name="co_middle_initial" type="text" placeholder="Middle Initial" class="form-input" />
        </div>
        <div>
          <input name="co_last_name" type="text" placeholder="* Last Name" class="form-input" required />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <input name="co_phone_day" type="tel" placeholder="* Day Phone" class="form-input" required />
        </div>
        <div>
          <input name="co_phone_evening" type="tel" placeholder="Evening Phone" class="form-input" />
        </div>
      </div>

      <input name="co_best_time" type="text" placeholder="Best time to call?" class="form-input mt-4" />
      <input name="co_email" type="email" placeholder="* Email" class="form-input mt-4" required />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <!-- SSN -->
        <div>
          <label class="text-xs text-gray-300 mb-1 block">* Social Security Number</label>
          <input name="co_ssn" type="text" placeholder="123-45-6789" class="form-input" required />
        </div>

        <!-- DOB -->
        <div>
          <label class="text-xs text-gray-300 mb-1 block">* Date of Birth</label>
          <input name="co_dob" type="date" class="form-input date-input" required />
        </div>
      </div>
    </div>

    <!-- ADDRESS -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold text-white mb-4">
        Co-Applicant Address
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- LEFT -->
        <div class="space-y-4">
          <h4 class="text-sm text-gray-300">Current Address</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input name="co_street" type="text" placeholder="* Street" class="form-input" required />
            </div>
            <div>
              <input name="co_apt" type="text" placeholder="Apt. No." class="form-input" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input name="co_city" type="text" placeholder="* City" class="form-input" required />
            </div>
            <div>
              <input name="co_state" type="text" placeholder="* State" class="form-input" required />
            </div>
            <div>
              <input name="co_zip" type="text" placeholder="* Zip" class="form-input" required />
            </div>
          </div>

          <select name="co_housing" class="form-input form-select" required>
            <option value="">* Rent or Own?</option>
            <option>Rent</option>
            <option>Own</option>
          </select>

          <input name="co_landlord_company" type="text" placeholder="Landlord / Mortgage Company" class="form-input" />
          <input name="co_rent_payment" type="text" placeholder="* Rent / Mortgage Payment" class="form-input" required />

          <div class="flex items-center gap-4">
            <div class="w-1/2 text-sm text-gray-400">
              Time at Current Residence
            </div>

            <div class="w-1/2 grid grid-cols-2 gap-4">
              <div>
                <input name="co_residence_years" type="number" placeholder="* Years" class="form-input" required />
              </div>
              <div>
                <input name="co_residence_months" type="number" placeholder="* Months" class="form-input" required />
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="space-y-4 border-t md:border-t-0 md:border-l border-gray-800 md:pl-6 pt-6 md:pt-0">
          <h4 class="text-sm text-gray-300">
            Previous Residence (If less than 2 years)
          </h4>

          <select name="co_prev_housing" class="form-input form-select">
            <option value="">Previous Rent or Own</option>
            <option>Rent</option>
            <option>Own</option>
          </select>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="co_prev_street" type="text" placeholder="Previous Street" class="form-input" />
            <input name="co_prev_apt" type="text" placeholder="Previous Apt. No." class="form-input" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="co_prev_city" type="text" placeholder="Previous City" class="form-input" />
            <input name="co_prev_state" type="text" placeholder="Previous State" class="form-input" />
            <input name="co_prev_zip" type="text" placeholder="Previous Zip" class="form-input" />
          </div>

          <div class="flex items-center gap-4">
            <div class="w-1/2 text-sm text-gray-400">
              Time at Previous Residence
            </div>

            <div class="w-1/2 grid grid-cols-2 gap-4">
              <input name="co_prev_residence_years" type="number" placeholder="Years" class="form-input" />
              <input name="co_prev_residence_months" type="number" placeholder="Months" class="form-input" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- EMPLOYMENT -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold text-white mb-4">
        Co-Applicant Employment
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- LEFT -->
        <div class="space-y-4">
          <h4 class="text-sm text-gray-300">Current Employment</h4>

          <select name="co_employment_status" class="form-input form-select" required>
            <option value="">* Employment Status</option>
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Unemployed</option>
          </select>

          <input name="co_company" type="text" placeholder="* Company Name" class="form-input" required />
          <input name="co_occupation" type="text" placeholder="* Occupation" class="form-input" required />
          <input name="co_business_phone" type="tel" placeholder="* Business Phone" class="form-input" required />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input name="co_work_city" type="text" placeholder="* City" class="form-input" required />
            </div>
            <div>
              <input name="co_work_state" type="text" placeholder="* State" class="form-input" required />
            </div>
            <div>
              <input name="co_work_zip" type="text" placeholder="* Zip" class="form-input" required />
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-1/2 text-sm text-gray-400">
              Time at Current Employer
            </div>

            <div class="w-1/2 grid grid-cols-2 gap-4">
              <div>
                <input name="co_employment_years" type="number" placeholder="* Years" class="form-input" required />
              </div>
              <div>
                <input name="co_employment_months" type="number" placeholder="* Months" class="form-input" required />
              </div>
            </div>
          </div>

          <input name="co_monthly_income" type="text" placeholder="* Monthly Income" class="form-input" required />
          <input name="co_additional_monthly_income" type="text" placeholder="Additional Income" class="form-input" />
          <input name="co_additional_income_source" type="text" placeholder="Income Source" class="form-input" />
        </div>

        <!-- RIGHT -->
        <div class="space-y-4 border-t md:border-t-0 md:border-l border-gray-800 md:pl-6 pt-6 md:pt-0">
          <h4 class="text-sm text-gray-300">
            Previous Employer (If less than two years)
          </h4>

          <input name="co_prev_company" type="text" placeholder="Previous Company Name" class="form-input" />
          <input name="co_prev_occupation" type="text" placeholder="Previous Occupation" class="form-input" />
          <input name="co_prev_business_phone" type="tel" placeholder="Previous Business Phone" class="form-input" />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="co_prev_work_city" type="text" placeholder="Previous City" class="form-input" />
            <input name="co_prev_work_state" type="text" placeholder="Previous State" class="form-input" />
            <input name="co_prev_work_zip" type="text" placeholder="Previous Zip" class="form-input" />
          </div>

          <div class="flex items-center gap-4">
            <div class="w-1/2 text-sm text-gray-400">
              Time at Previous Employer
            </div>

            <div class="w-1/2 grid grid-cols-2 gap-4">
              <input name="co_prev_employment_years" type="number" placeholder="Years" class="form-input" />
              <input name="co_prev_employment_months" type="number" placeholder="Months" class="form-input" />
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  sectionCoApplicant.classList.remove('hidden');
}

function removeCoApplicant() {
  form.has_co_applicant.value = '';
  sectionCoApplicant.innerHTML = '';
  sectionCoApplicant.classList.add('hidden');
}

const form = document.getElementById('creditForm');
const submitBtn = form.querySelector('button[type="submit"]');

function showError(input) {
  input.classList.add('error');

  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('form-error')) {
    const error = document.createElement('div');
    error.className = 'form-error';
    error.textContent = 'This field is required';
    input.after(error);
  }
}

function clearError(input) {
  input.classList.remove('error');

  if (input.nextElementSibling && input.nextElementSibling.classList.contains('form-error')) {
    input.nextElementSibling.remove();
  }
}

function validateForm() {
  let isValid = true;

  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach((input) => {
    if (!input.value.trim()) {
      showError(input);
      isValid = false;
    } else {
      clearError(input);
    }
  });

  return isValid;
}

form.addEventListener('input', (e) => {
  if (e.target.matches('input, select, textarea')) {
    clearError(e.target);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    const firstError = form.querySelector('.error');
    if (firstError) {
      firstError.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

  // date
  const now = new Date();
  const formatted = now.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  form.date_time.value = formatted;

  emailjs
    .sendForm('service_m6swn1f', 'template_7ffpuys', form)
    .then(() => {
      submitBtn.textContent = 'Sent ✓';
      form.reset();
      removeCoApplicant();
      isAdded = false;

      btn.querySelector('.btn-coapplicant__icon').textContent = '+';
      btn.querySelector('.btn-coapplicant__text').textContent = 'Add Co-Applicant';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application';
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }, 2000);
    })
    .catch((error) => {
      console.error(error);

      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');

      alert('Error sending');
    });
});
