
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusIcon, TrashIcon, UploadIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EducationQualificationProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const EducationQualification: React.FC<EducationQualificationProps> = ({ formData, updateFormData }) => {
  const [educationEntries, setEducationEntries] = useState([
    { id: 1, college: '', course: '', specialization: '', duration: '', type: '', marks: '' }
  ]);
  
  const [certifications, setCertifications] = useState([
    { id: 1, courseName: '', duration: '', certificate: null }
  ]);

  const addEducationEntry = () => {
    const newEntry = {
      id: educationEntries.length + 1,
      college: '',
      course: '',
      specialization: '',
      duration: '',
      type: '',
      marks: ''
    };
    setEducationEntries([...educationEntries, newEntry]);
  };

  const removeEducationEntry = (id: number) => {
    setEducationEntries(educationEntries.filter(entry => entry.id !== id));
  };

  const addCertification = () => {
    const newCert = {
      id: certifications.length + 1,
      courseName: '',
      duration: '',
      certificate: null
    };
    setCertifications([...certifications, newCert]);
  };

  const removeCertification = (id: number) => {
    setCertifications(certifications.filter(cert => cert.id !== id));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certification">Certifications & Training</TabsTrigger>
        </TabsList>

        <TabsContent value="education" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Educational Qualifications</h3>
            <Button onClick={addEducationEntry} variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Education
            </Button>
          </div>

          {educationEntries.map((entry, index) => (
            <Card key={entry.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Education Entry {index + 1}
                  </CardTitle>
                  {educationEntries.length > 1 && (
                    <Button
                      onClick={() => removeEducationEntry(entry.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">College/Institute *</Label>
                    <Input
                      placeholder="Enter college/institute name"
                      value={entry.college}
                      onChange={(e) => {
                        const updated = educationEntries.map(edu => 
                          edu.id === entry.id ? { ...edu, college: e.target.value } : edu
                        );
                        setEducationEntries(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Course *</Label>
                    <Input
                      placeholder="e.g., B.Tech, MBA, etc."
                      value={entry.course}
                      onChange={(e) => {
                        const updated = educationEntries.map(edu => 
                          edu.id === entry.id ? { ...edu, course: e.target.value } : edu
                        );
                        setEducationEntries(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Specialization</Label>
                    <Input
                      placeholder="e.g., Computer Science, Finance"
                      value={entry.specialization}
                      onChange={(e) => {
                        const updated = educationEntries.map(edu => 
                          edu.id === entry.id ? { ...edu, specialization: e.target.value } : edu
                        );
                        setEducationEntries(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Duration *</Label>
                    <Input
                      placeholder="e.g., 2018-2022"
                      value={entry.duration}
                      onChange={(e) => {
                        const updated = educationEntries.map(edu => 
                          edu.id === entry.id ? { ...edu, duration: e.target.value } : edu
                        );
                        setEducationEntries(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fulltime">Full Time</SelectItem>
                        <SelectItem value="parttime">Part Time</SelectItem>
                        <SelectItem value="distance">Distance Learning</SelectItem>
                        <SelectItem value="correspondence">Correspondence</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Marks/CGPA *</Label>
                    <Input
                      placeholder="e.g., 85% or 8.5 CGPA"
                      value={entry.marks}
                      onChange={(e) => {
                        const updated = educationEntries.map(edu => 
                          edu.id === entry.id ? { ...edu, marks: e.target.value } : edu
                        );
                        setEducationEntries(updated);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="certification" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Certifications & Training</h3>
            <Button onClick={addCertification} variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Certification
            </Button>
          </div>

          {certifications.map((cert, index) => (
            <Card key={cert.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Certification {index + 1}
                  </CardTitle>
                  {certifications.length > 1 && (
                    <Button
                      onClick={() => removeCertification(cert.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Course Name *</Label>
                    <Input
                      placeholder="Enter certification/course name"
                      value={cert.courseName}
                      onChange={(e) => {
                        const updated = certifications.map(c => 
                          c.id === cert.id ? { ...c, courseName: e.target.value } : c
                        );
                        setCertifications(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Duration</Label>
                    <Input
                      placeholder="e.g., 3 months, 40 hours"
                      value={cert.duration}
                      onChange={(e) => {
                        const updated = certifications.map(c => 
                          c.id === cert.id ? { ...c, duration: e.target.value } : c
                        );
                        setCertifications(updated);
                      }}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-sm font-medium">Certificate Upload</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <div className="text-center">
                        <UploadIcon className="mx-auto h-8 w-8 text-gray-400" />
                        <div className="mt-2">
                          <Label htmlFor={`cert-upload-${cert.id}`} className="cursor-pointer">
                            <span className="text-sm font-medium text-gray-900">
                              Click to upload certificate
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                              PDF, PNG, JPG up to 10MB
                            </span>
                          </Label>
                          <Input
                            id={`cert-upload-${cert.id}`}
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducationQualification;
