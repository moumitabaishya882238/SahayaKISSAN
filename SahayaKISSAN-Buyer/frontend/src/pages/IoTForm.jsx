import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./IoTForm.css";

export default function IoTForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    devices: {
      soil: false,
      weather: false,
      pest: false,
      scanner: false,
    },
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeviceChange = (e) => {
    setFormData({
      ...formData,
      devices: {
        ...formData.devices,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowError(false);

    try {
      await axios.post("http://localhost:5000/iot/request", formData);
      setShowSuccess(true);
      
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        location: "",
        devices: {
          soil: false,
          weather: false,
          pest: false,
          scanner: false,
        },
        message: "",
      });
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Failed to submit request. Please try again.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <div className="page">
      <div className="dashboardHeroBtn">
        <Link to="/dashboard" className="dashboardBtn">
          Go to Dashboard
        </Link>
      </div>

      <div className="headingSection">
        <h1 className="mainHeading">
          Smart IoT Solutions{" "}
          <span className="assamText">for Assam Tea Farmers</span>
        </h1>
        <p className="subHeading">
          Affordable, field-ready devices designed specifically for Assam's tea plantations
        </p>
      </div>

      <div className="heroImage"></div>

      <div className="whyIoTSection">
        <h2 className="sectionTitle">Why IoT for Assam Tea Farming?</h2>
        
        <div className="whyIoTContent">
          <div className="whyIoTText">
            <p className="whyLead">
              Assam's tea industry faces unique challenges: unpredictable monsoons, 
              pest outbreaks, soil degradation, and labor shortages. Traditional farming 
              relies on guesswork, leading to <strong>20-30% yield losses annually</strong>.
            </p>
            
            <div className="whyStats">
              <div className="statItem">
                <div className="statNumber">₹15,000</div>
                <div className="statLabel">Avg loss per acre/year</div>
              </div>
              <div className="statItem">
                <div className="statNumber">72%</div>
                <div className="statLabel">Tea farms without tech</div>
              </div>
              <div className="statItem">
                <div className="statNumber">40%</div>
                <div className="statLabel">Yield increase possible</div>
              </div>
            </div>

            <div className="whyBenefits">
              <h3 className="benefitsTitle">IoT Solves These Problems:</h3>
              <div className="benefitList">
                <div className="benefitItem">
                  <span className="benefitIcon"></span>
                  <div>
                    <strong>Precise Irrigation:</strong> Save 35% water by watering only when soil needs it
                  </div>
                </div>
                <div className="benefitItem">
                  <span className="benefitIcon"></span>
                  <div>
                    <strong>Early Pest Alerts:</strong> Detect outbreaks 7 days earlier, save 25% crop loss
                  </div>
                </div>
                <div className="benefitItem">
                  <span className="benefitIcon"></span>
                  <div>
                    <strong>Weather Integration:</strong> Microclimate data specific to your plantation
                  </div>
                </div>
                <div className="benefitItem">
                  <span className="benefitIcon"></span>
                  <div>
                    <strong>Mobile Dashboard:</strong> Monitor entire farm from your phone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="devicesSection">
        <h2 className="sectionTitle"> Our Field-Ready Devices</h2>
        <div className="deviceGrid">
          <div className="deviceCard available">
            <div className="deviceImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1598514982845-23f4f5c7aa0a"
                alt="Smart Soil Monitoring Kit"
                className="deviceImg"
              />
              <span className="deviceBadge available">Available Now</span>
            </div>
            <h3>Smart Soil Monitoring Kit</h3>
            <p>Complete soil health monitoring - moisture, pH, nutrients, temperature.</p>
            <div className="devicePrice">₹4,999</div>
          </div>

          <div className="deviceCard">
            <div className="deviceImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1581091215367-59ab6c4d5b44"
                alt="Weather Station"
                className="deviceImg"
              />
              <span className="deviceBadge comingSoon">Coming Q2 2026</span>
            </div>
            <h3>Weather & Microclimate Station</h3>
            <p>Local rainfall, humidity, wind speed, temperature forecasting.</p>
            <div className="devicePrice coming">₹6,499</div>
          </div>

          <div className="deviceCard">
            <div className="deviceImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648"
                alt="Pest Detection"
                className="deviceImg"
              />
              <span className="deviceBadge comingSoon">Coming Q3 2026</span>
            </div>
            <h3>Pest & Disease Alert</h3>
            <p>Camera + AI detects pests and diseases instantly with alerts.</p>
            <div className="devicePrice coming">₹8,999</div>
          </div>

          <div className="deviceCard">
            <div className="deviceImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1623874514711-0f321325f318"
                alt="AI Scanner"
                className="deviceImg"
              />
              <span className="deviceBadge comingSoon">Coming Q4 2026</span>
            </div>
            <h3>AI Tea Leaf Quality Scanner</h3>
            <p>Instant grading and quality assessment of harvested tea leaves.</p>
            <div className="devicePrice coming">₹12,999</div>
          </div>
        </div>
      </div>

      <div className="ctaSection">
        <div className="ctaContent">
          <p className="ctaText">
            Ready to transform your tea farm with smart IoT technology?
          </p>
          <p className="ctaSubtext">
            Request deployment for your plantation today - installation included
          </p>
        </div>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle"> Request Device Deployment</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Farm Location / District"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <div className="formGroup">
            <label className="formLabel">Select Devices Needed</label>

            <div className="deviceSelectBox">
              <label className="checkboxItem">
                <input
                  type="checkbox"
                  name="soil"
                  checked={formData.devices.soil}
                  onChange={handleDeviceChange}
                />
                <span>Smart Soil Monitoring Kit (₹4,999)</span>
              </label>

              <label className="checkboxItem">
                <input
                  type="checkbox"
                  name="weather"
                  checked={formData.devices.weather}
                  onChange={handleDeviceChange}
                />
                <span>Weather Station (Coming Q2 2026)</span>
              </label>

              <label className="checkboxItem">
                <input
                  type="checkbox"
                  name="pest"
                  checked={formData.devices.pest}
                  onChange={handleDeviceChange}
                />
                <span>Pest & Disease Alert (Coming Q3 2026)</span>
              </label>

              <label className="checkboxItem">
                <input
                  type="checkbox"
                  name="scanner"
                  checked={formData.devices.scanner}
                  onChange={handleDeviceChange}
                />
                <span>AI Tea Leaf Scanner (Coming Q4 2026)</span>
              </label>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Additional requirements or farm details..."
            rows="4"
            className="formTextarea"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? " Submitting..." : " Deploy IoT to My Farm"}
          </button>
        </form>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup success-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">✅</div>
            <h3>Request Submitted Successfully!</h3>
            <p>Our team will contact you within 24 hours to discuss deployment.</p>
            <button className="popup-btn" onClick={closePopup}>Got it!</button>
          </div>
        </div>
      )}

      {/* ERROR POPUP */}
      {showError && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup error-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">❌</div>
            <h3>Submission Failed</h3>
            <p>{errorMsg}</p>
            <button className="popup-btn" onClick={closePopup}>Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
}
