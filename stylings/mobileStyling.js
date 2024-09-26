export function applyMobileStyle() {
    if (!customElements.get('background-image')) {
        class BackgroundImage extends HTMLElement {
            connectedCallback() {
                const color = this.getAttribute('bg-color') || 'pink';
                const imageSrc = this.getAttribute('include-picture');
                const name = this.getAttribute('name') || 'Unknown Name';
                const designation = this.getAttribute('designation') || 'Designation';
                const company = this.getAttribute('company') || 'Company';
                const phone = this.getAttribute('phone') || 'Phone not provided';
                const email = this.getAttribute('email') || 'Email not provided';
                const address = this.getAttribute('address') || 'Address not provided';

                // Banner styling
                this.style.display = 'block';
                this.style.width = '100%';
                this.style.height = '25%';
                this.style.border = 'none';
                this.style.boxSizing = 'border-box';
                this.style.position = 'absolute';
                this.style.top = '0';
                this.style.left = '0';
                this.style.margin = '0';
                this.style.padding = '0';
                this.style.backgroundColor = color;


                // If the image source is provided
                if (imageSrc) {
                    const img = document.createElement('img');
                    img.src = imageSrc;

                    // Image styling
                    img.style.width = '15vw';
                    img.style.height = '15vw';
                    img.style.borderRadius = '50%'; // Circular shape
                    img.style.objectFit = 'cover'; // Fit the image within the circle
                    img.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'; // Soft shadow
                    img.style.border = '4px solid white'; // White border around the image

                    // Center the image and make it overlap the banner
                    img.style.position = 'absolute';
                    img.style.left = '9%'; // Adjust as needed
                    img.style.bottom = '-7vw'; // Half of the image height to overlap
                    img.style.transform = 'translateX(-50%)'; // Proper centering
                    this.appendChild(img);
                }

                // Create a container for the text (name, designation, company)
                const textContainer = document.createElement('div');
                textContainer.style.position = 'absolute';
                textContainer.style.top = '10px'; // Top margin
                textContainer.style.right = '43%'; // Align on left side
                textContainer.style.textAlign = 'right'; // Align text to the left
                textContainer.style.color = '#fff'; // Text color
                textContainer.style.fontFamily = 'Arial, sans-serif'; // Font family
                textContainer.style.lineHeight = '1.5'; // Line spacing for better readability

                // Name
                const nameElement = document.createElement('h1');
                nameElement.textContent = name;
                nameElement.style.margin = '0'; // Remove default margin
                nameElement.style.fontSize = '40px'; // Set font size for the name
                textContainer.appendChild(nameElement);

                // Designation
                const designationElement = document.createElement('p');
                designationElement.textContent = designation;
                designationElement.style.margin = '5px 0'; // Set margin between text
                designationElement.style.fontSize = '16px'; // Font size for designation
                textContainer.appendChild(designationElement);

                // Company
                const companyElement = document.createElement('p');
                companyElement.textContent = company;
                companyElement.style.margin = '0'; // Set margin between text
                companyElement.style.fontSize = '16px'; // Font size for company
                textContainer.appendChild(companyElement);

                // Append the text container to the banner
                this.appendChild(textContainer);

                // Add a vertical line between textContainer and contacts
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.top = '10px';
                line.style.right = '40%'; // Adjust this based on where you want the line
                line.style.width = '2px'; // Thickness of the vertical line
                line.style.height = '80%'; // Height of the vertical line
                line.style.backgroundColor = '#fff'; // Color of the line
                this.appendChild(line);

                // Create a container for the contact information
                const contactContainer = document.createElement('div');
                contactContainer.style.position = 'absolute';
                contactContainer.style.top = '50px'; // Align vertically with the name
                contactContainer.style.left = '63%'; // Align to the right side
                contactContainer.style.textAlign = 'left'; // Align text to the right
                contactContainer.style.color = '#fff'; // Text color
                contactContainer.style.fontFamily = 'Arial, sans-serif'; // Font family
                contactContainer.style.lineHeight = '1.5'; // Line spacing for readability

                // Phone
                const phoneElement = document.createElement('p');
                phoneElement.textContent = `Phone: ${phone}`;
                phoneElement.style.margin = '0'; // Set margin between text
                phoneElement.style.fontSize = '18px'; // Font size for phone
                contactContainer.appendChild(phoneElement);

                // Email
                const emailElement = document.createElement('p');
                emailElement.textContent = `Email: ${email}`;
                emailElement.style.margin = '0'; // Set margin between text
                emailElement.style.fontSize = '18px'; // Font size for email
                contactContainer.appendChild(emailElement);

                //Address
                const addressElement = document.createElement('p');
                addressElement.textContent = `Address: ${address}`;
                addressElement.style.margin = '0'; // Set margin between text
                addressElement.style.fontSize = '18px'; // Font size for email
                contactContainer.appendChild(addressElement);


                // Append the contact container to the banner
                this.appendChild(contactContainer);
            }
        }
        customElements.define('background-image', BackgroundImage);
    }
}
