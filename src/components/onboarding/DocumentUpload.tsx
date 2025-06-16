
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UploadIcon, FileTextIcon, CheckIcon, EyeIcon, TrashIcon } from 'lucide-react';

interface DocumentUploadProps {
  formData: any;
  updateFormData: (data: any) => void;
}

interface Document {
  id: string;
  name: string;
  required: boolean;
  uploaded: boolean;
  file?: File;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ formData, updateFormData }) => {
  const [documents, setDocuments] = useState<Document[]>([
    { id: 'nda', name: 'Non-Disclosure Agreement (NDA)', required: true, uploaded: false },
    { id: 'declaration', name: 'Self Declaration', required: true, uploaded: false },
    { id: 'joining-report', name: 'Joining Report', required: true, uploaded: false },
    { id: 'offer-letter', name: 'Employment Offer Letter Copy', required: true, uploaded: false },
    { id: 'relieving-letter', name: 'Previous Employer Relieving Letter', required: false, uploaded: false },
    { id: 'salary-slip', name: 'Last 3 Months Salary Slips', required: false, uploaded: false },
    { id: 'experience-letter', name: 'Experience Certificate', required: false, uploaded: false },
    { id: 'education-certificates', name: 'Education Certificates', required: false, uploaded: false },
  ]);

  const handleFileUpload = (documentId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDocuments(prev =>
        prev.map(doc =>
          doc.id === documentId
            ? { ...doc, uploaded: true, file }
            : doc
        )
      );
    }
  };

  const removeDocument = (documentId: string) => {
    setDocuments(prev =>
      prev.map(doc =>
        doc.id === documentId
          ? { ...doc, uploaded: false, file: undefined }
          : doc
      )
    );
  };

  const previewDocument = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  };

  const requiredDocs = documents.filter(doc => doc.required);
  const optionalDocs = documents.filter(doc => !doc.required);
  const uploadedRequired = requiredDocs.filter(doc => doc.uploaded).length;
  const totalRequired = requiredDocs.length;

  return (
    <div className="space-y-6">
      {/* Progress Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Document Upload Progress</h3>
              <p className="text-sm text-blue-700 mt-1">
                {uploadedRequired} of {totalRequired} required documents uploaded
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round((uploadedRequired / totalRequired) * 100)}%
              </div>
              <p className="text-xs text-blue-600">Complete</p>
            </div>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(uploadedRequired / totalRequired) * 100}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          Required Documents
          <Badge variant="destructive" className="ml-2">Mandatory</Badge>
        </h3>
        
        {requiredDocs.map((doc) => (
          <Card key={doc.id} className={`${doc.uploaded ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center">
                  <FileTextIcon className="w-5 h-5 mr-2" />
                  {doc.name}
                  {doc.uploaded && <CheckIcon className="w-5 h-5 ml-2 text-green-600" />}
                </CardTitle>
                <Badge variant={doc.uploaded ? "default" : "secondary"}>
                  {doc.uploaded ? "Uploaded" : "Pending"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {!doc.uploaded ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <UploadIcon className="mx-auto h-8 w-8 text-gray-400" />
                    <div className="mt-2">
                      <Label htmlFor={`upload-${doc.id}`} className="cursor-pointer">
                        <span className="text-sm font-medium text-gray-900">
                          Click to upload {doc.name}
                        </span>
                        <span className="block text-xs text-gray-500 mt-1">
                          PDF, PNG, JPG up to 10MB
                        </span>
                      </Label>
                      <Input
                        id={`upload-${doc.id}`}
                        type="file"
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload(doc.id, e)}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.file?.name}</p>
                      <p className="text-xs text-gray-500">
                        {doc.file ? `${(doc.file.size / 1024 / 1024).toFixed(2)} MB` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {doc.file && (
                      <Button
                        onClick={() => previewDocument(doc.file!)}
                        variant="ghost"
                        size="sm"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      onClick={() => removeDocument(doc.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional Documents */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          Optional Documents
          <Badge variant="outline" className="ml-2">Optional</Badge>
        </h3>
        
        {optionalDocs.map((doc) => (
          <Card key={doc.id} className={`${doc.uploaded ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center">
                  <FileTextIcon className="w-5 h-5 mr-2" />
                  {doc.name}
                  {doc.uploaded && <CheckIcon className="w-5 h-5 ml-2 text-green-600" />}
                </CardTitle>
                <Badge variant={doc.uploaded ? "default" : "outline"}>
                  {doc.uploaded ? "Uploaded" : "Optional"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {!doc.uploaded ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <div className="text-center">
                    <UploadIcon className="mx-auto h-6 w-6 text-gray-400" />
                    <div className="mt-2">
                      <Label htmlFor={`upload-${doc.id}`} className="cursor-pointer">
                        <span className="text-sm font-medium text-gray-900">
                          Click to upload {doc.name}
                        </span>
                        <span className="block text-xs text-gray-500 mt-1">
                          PDF, PNG, JPG up to 10MB
                        </span>
                      </Label>
                      <Input
                        id={`upload-${doc.id}`}
                        type="file"
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload(doc.id, e)}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.file?.name}</p>
                      <p className="text-xs text-gray-500">
                        {doc.file ? `${(doc.file.size / 1024 / 1024).toFixed(2)} MB` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {doc.file && (
                      <Button
                        onClick={() => previewDocument(doc.file!)}
                        variant="ghost"
                        size="sm"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      onClick={() => removeDocument(doc.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
