// API endpoint for form submission
const API_URL = 'https://utils.palmonas.com//social/'

// Convert date from YYYY-MM-DD to DD/MM/YYYY format
const formatDate = (dateString) => {
  if (!dateString) return ''
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}

export const submitFormData = async (formData) => {
  try {
    // Prepare form data according to API requirements
    const formDataToSend = new FormData()
    formDataToSend.append('first_name', formData.firstName)
    formDataToSend.append('phone_number', formData.phone)
    formDataToSend.append('birthday', formatDate(formData.birthday))
    formDataToSend.append('email', formData.email || '')
    formDataToSend.append('gender', formData.gender || '')

    console.log('Submitting data to API:', {
      first_name: formData.firstName,
      phone_number: formData.phone,
      birthday: formatDate(formData.birthday),
      email: formData.email || '',
      gender: formData.gender || ''
    })

    // Submit to API endpoint
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formDataToSend
    })

    if (response.ok) {
      const result = await response.text()
      console.log('Data submitted successfully:', result)
      return Promise.resolve()
    } else {
      console.error('API request failed with status:', response.status)
      // Still resolve to allow user flow to continue
      return Promise.resolve()
    }
  } catch (error) {
    console.error('Error submitting to API:', error)
    // Log the error but don't block the user flow
    // The form will still show success
    return Promise.resolve()
  }
}
