
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon, UploadIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface PersonalInformationProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ formData, updateFormData }) => {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
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
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="Enter full name as per government ID"
            className="w-full"
          />
        </div>

        {/* Gender */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Gender *</Label>
          <RadioGroup defaultValue="male" className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Date of Birth *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dateOfBirth && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateOfBirth ? format(dateOfBirth, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateOfBirth}
                onSelect={setDateOfBirth}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Blood Group */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Blood Group</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select blood group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a+">A+</SelectItem>
              <SelectItem value="a-">A-</SelectItem>
              <SelectItem value="b+">B+</SelectItem>
              <SelectItem value="b-">B-</SelectItem>
              <SelectItem value="ab+">AB+</SelectItem>
              <SelectItem value="ab-">AB-</SelectItem>
              <SelectItem value="o+">O+</SelectItem>
              <SelectItem value="o-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Father's Name */}
        <div className="space-y-2">
          <Label htmlFor="fatherName" className="text-sm font-medium">Father's Name *</Label>
          <Input
            id="fatherName"
            placeholder="Enter father's name"
            className="w-full"
          />
        </div>

        {/* PAN Number */}
        <div className="space-y-2">
          <Label htmlFor="panNumber" className="text-sm font-medium">PAN Number *</Label>
          <Input
            id="panNumber"
            placeholder="ABCDE1234F"
            className="w-full uppercase"
            maxLength={10}
          />
        </div>

        {/* Nationality/Passport */}
        <div className="space-y-2">
          <Label htmlFor="nationality" className="text-sm font-medium">Nationality / Passport No.</Label>
          <Input
            id="nationality"
            placeholder="Indian / Passport number"
            className="w-full"
          />
        </div>

        {/* Marital Status */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Marital Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Aadhaar Number */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="aadhaarNumber" className="text-sm font-medium">Aadhaar Number *</Label>
          <Input
            id="aadhaarNumber"
            placeholder="1234 5678 9012"
            className="w-full"
            maxLength={14}
          />
        </div>
      </div>

      {/* Photo Upload Section */}
      <div className="space-y-4">
        <Label className="text-sm font-medium">Passport Size Photos * (Upload 3 photos)</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <Label htmlFor="photo-upload" className="cursor-pointer">
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Click to upload photos
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  PNG, JPG up to 5MB each (3 photos required)
                </span>
              </Label>
              <Input
                id="photo-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Uploaded Photos Preview */}
        {uploadedPhotos.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {uploadedPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border"
                />
                <Button
                  onClick={() => removePhoto(index)}
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
