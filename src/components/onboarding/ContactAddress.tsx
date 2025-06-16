
import React, { useState } from 'react';
import { CalendarIcon } from 'lucide-react';

interface ContactAddressProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const ContactAddress: React.FC<ContactAddressProps> = ({ formData, updateFormData }) => {
  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  return (
    <div className="row g-4">
      {/* Current Address */}
      <div className="col-12">
        <div className="card bg-primary bg-opacity-10 border-primary border-opacity-25">
          <div className="card-header bg-primary bg-opacity-10">
            <h5 className="card-title text-primary mb-0">Current Address</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="currentAddress" className="form-label fw-medium">Address *</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentAddress"
                  placeholder="Enter complete address"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="currentLandmark" className="form-label fw-medium">Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentLandmark"
                  placeholder="Nearby landmark"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="currentCity" className="form-label fw-medium">City *</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentCity"
                  placeholder="Enter city"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="currentState" className="form-label fw-medium">State *</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentState"
                  placeholder="Enter state"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="currentPincode" className="form-label fw-medium">Pincode *</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentPincode"
                  placeholder="123456"
                  maxLength={6}
                />
              </div>

              {/* Duration of Stay */}
              <div className="col-12">
                <label className="form-label fw-medium">Duration of Stay</label>
                <div className="row g-2">
                  <div className="col-md-6">
                    <label className="form-label small">From</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">To (Current)</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="col-md-6">
                <label htmlFor="mobileNumber" className="form-label fw-medium">Mobile Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="homePhone" className="form-label fw-medium">Home Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="homePhone"
                  placeholder="011-12345678"
                />
              </div>

              {/* Neighbor Details */}
              <div className="col-md-6">
                <label htmlFor="neighborName" className="form-label fw-medium">Neighbor Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="neighborName"
                  placeholder="Neighbor's name (optional)"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="neighborContact" className="form-label fw-medium">Neighbor Contact</label>
                <input
                  type="tel"
                  className="form-control"
                  id="neighborContact"
                  placeholder="Neighbor's contact (optional)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permanent Address */}
      <div className="col-12">
        <div className="card bg-success bg-opacity-10 border-success border-opacity-25">
          <div className="card-header bg-success bg-opacity-10 d-flex justify-content-between align-items-center">
            <h5 className="card-title text-success mb-0">Permanent Address</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameAddress"
                checked={sameAsCurrent}
                onChange={(e) => setSameAsCurrent(e.target.checked)}
              />
              <label className="form-check-label fw-medium" htmlFor="sameAddress">
                Same as current address
              </label>
            </div>
          </div>

          {!sameAsCurrent && (
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="permanentAddress" className="form-label fw-medium">Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="permanentAddress"
                    placeholder="Enter complete address"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="permanentLandmark" className="form-label fw-medium">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    id="permanentLandmark"
                    placeholder="Nearby landmark"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="permanentCity" className="form-label fw-medium">City *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="permanentCity"
                    placeholder="Enter city"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="permanentState" className="form-label fw-medium">State *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="permanentState"
                    placeholder="Enter state"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="permanentPincode" className="form-label fw-medium">Pincode *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="permanentPincode"
                    placeholder="123456"
                    maxLength={6}
                  />
                </div>
              </div>
            </div>
          )}

          {sameAsCurrent && (
            <div className="card-body text-center py-5 text-muted">
              <p className="mb-0">Permanent address will be copied from current address</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
