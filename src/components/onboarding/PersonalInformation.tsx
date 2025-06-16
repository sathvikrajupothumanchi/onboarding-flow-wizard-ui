
import React, { useState } from 'react';
import { CalendarIcon, UploadIcon } from 'lucide-react';

interface PersonalInformationProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ formData, updateFormData }) => {
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (uploadedPhotos.length + files.length <= 3) {
      setUploadedPhotos(prev => [...prev, ...files]);
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="row g-3">
          {/* Full Name */}
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label fw-medium">Full Name *</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter full name as per government ID"
            />
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <label className="form-label fw-medium">Gender *</label>
            <div className="d-flex gap-3 mt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="male" defaultChecked />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
                <label className="form-check-label" htmlFor="other">Other</label>
              </div>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="col-md-6">
            <label htmlFor="dateOfBirth" className="form-label fw-medium">Date of Birth *</label>
            <input type="date" className="form-control" id="dateOfBirth" />
          </div>

          {/* Blood Group */}
          <div className="col-md-6">
            <label htmlFor="bloodGroup" className="form-label fw-medium">Blood Group</label>
            <select className="form-select" id="bloodGroup">
              <option value="">Select blood group</option>
              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
            </select>
          </div>

          {/* Father's Name */}
          <div className="col-md-6">
            <label htmlFor="fatherName" className="form-label fw-medium">Father's Name *</label>
            <input
              type="text"
              className="form-control"
              id="fatherName"
              placeholder="Enter father's name"
            />
          </div>

          {/* PAN Number */}
          <div className="col-md-6">
            <label htmlFor="panNumber" className="form-label fw-medium">PAN Number *</label>
            <input
              type="text"
              className="form-control text-uppercase"
              id="panNumber"
              placeholder="ABCDE1234F"
              maxLength={10}
            />
          </div>

          {/* Nationality/Passport */}
          <div className="col-md-6">
            <label htmlFor="nationality" className="form-label fw-medium">Nationality / Passport No.</label>
            <input
              type="text"
              className="form-control"
              id="nationality"
              placeholder="Indian / Passport number"
            />
          </div>

          {/* Marital Status */}
          <div className="col-md-6">
            <label htmlFor="maritalStatus" className="form-label fw-medium">Marital Status</label>
            <select className="form-select" id="maritalStatus">
              <option value="">Select marital status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          {/* Aadhaar Number */}
          <div className="col-12">
            <label htmlFor="aadhaarNumber" className="form-label fw-medium">Aadhaar Number *</label>
            <input
              type="text"
              className="form-control"
              id="aadhaarNumber"
              placeholder="1234 5678 9012"
              maxLength={14}
            />
          </div>
        </div>
      </div>

      {/* Photo Upload Section */}
      <div className="col-12">
        <label className="form-label fw-medium">Passport Size Photos * (Upload 3 photos)</label>
        <div className="border border-2 border-dashed rounded p-4 text-center bg-light">
          <UploadIcon size={48} className="text-muted mb-3" />
          <div>
            <label htmlFor="photo-upload" className="btn btn-outline-primary cursor-pointer">
              <span className="fw-medium">Click to upload photos</span>
            </label>
            <div className="text-muted small mt-2">
              PNG, JPG up to 5MB each (3 photos required)
            </div>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="d-none"
            />
          </div>
        </div>

        {/* Uploaded Photos Preview */}
        {uploadedPhotos.length > 0 && (
          <div className="row g-3 mt-3">
            {uploadedPhotos.map((photo, index) => (
              <div key={index} className="col-md-4">
                <div className="position-relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Photo ${index + 1}`}
                    className="img-fluid rounded border"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="btn btn-danger btn-sm position-absolute"
                    style={{ top: '-8px', right: '-8px', width: '24px', height: '24px', padding: '0' }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
