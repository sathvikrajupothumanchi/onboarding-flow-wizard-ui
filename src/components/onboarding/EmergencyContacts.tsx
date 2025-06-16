
import React from 'react';
import { PhoneIcon, MailIcon, UserIcon } from 'lucide-react';

interface EmergencyContactsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="mb-4">
          <h3 className="h5 fw-semibold mb-2">Emergency Contacts</h3>
          <p className="text-muted small">Please provide details for two emergency contacts</p>
        </div>
      </div>

      {/* Emergency Contact 1 */}
      <div className="col-12">
        <div className="card bg-danger bg-opacity-10 border-danger border-opacity-25">
          <div className="card-header bg-danger bg-opacity-10">
            <h5 className="card-title text-danger d-flex align-items-center mb-0">
              <UserIcon size={20} className="me-2" />
              Emergency Contact 1 (Primary)
            </h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">Full Name *</label>
                <input type="text" className="form-control" placeholder="Enter contact's full name" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Relationship *</label>
                <select className="form-select">
                  <option value="">Select relationship</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="spouse">Spouse</option>
                  <option value="sibling">Brother/Sister</option>
                  <option value="friend">Friend</option>
                  <option value="relative">Relative</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label fw-medium">Address *</label>
                <input type="text" className="form-control" placeholder="Enter complete address" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Phone Number *</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <PhoneIcon size={16} className="text-muted" />
                  </span>
                  <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <MailIcon size={16} className="text-muted" />
                  </span>
                  <input type="email" className="form-control" placeholder="contact@email.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact 2 */}
      <div className="col-12">
        <div className="card bg-warning bg-opacity-10 border-warning border-opacity-25">
          <div className="card-header bg-warning bg-opacity-10">
            <h5 className="card-title text-warning-emphasis d-flex align-items-center mb-0">
              <UserIcon size={20} className="me-2" />
              Emergency Contact 2 (Secondary)
            </h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">Full Name *</label>
                <input type="text" className="form-control" placeholder="Enter contact's full name" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Relationship *</label>
                <select className="form-select">
                  <option value="">Select relationship</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="spouse">Spouse</option>
                  <option value="sibling">Brother/Sister</option>
                  <option value="friend">Friend</option>
                  <option value="relative">Relative</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label fw-medium">Address *</label>
                <input type="text" className="form-control" placeholder="Enter complete address" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Phone Number *</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <PhoneIcon size={16} className="text-muted" />
                  </span>
                  <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <MailIcon size={16} className="text-muted" />
                  </span>
                  <input type="email" className="form-control" placeholder="contact@email.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="col-12">
        <div className="card bg-info bg-opacity-10 border-info border-opacity-25">
          <div className="card-body text-center">
            <p className="text-info-emphasis small mb-0">
              <strong>Note:</strong> Emergency contacts will only be contacted in case of medical emergencies 
              or critical situations. Please ensure the information provided is accurate and up-to-date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
