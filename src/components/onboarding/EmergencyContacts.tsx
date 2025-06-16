
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PhoneIcon, MailIcon, UserIcon } from 'lucide-react';

interface EmergencyContactsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
        <p className="text-sm text-gray-600">Please provide details for two emergency contacts</p>
      </div>

      {/* Emergency Contact 1 */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <UserIcon className="w-5 h-5 mr-2" />
            Emergency Contact 1 (Primary)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Full Name *</Label>
              <Input placeholder="Enter contact's full name" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Relationship *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="father">Father</SelectItem>
                  <SelectItem value="mother">Mother</SelectItem>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="sibling">Brother/Sister</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="relative">Relative</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium">Address *</Label>
              <Input placeholder="Enter complete address" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Phone Number *</Label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Email Address</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="contact@email.com" type="email" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact 2 */}
      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <UserIcon className="w-5 h-5 mr-2" />
            Emergency Contact 2 (Secondary)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Full Name *</Label>
              <Input placeholder="Enter contact's full name" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Relationship *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="father">Father</SelectItem>
                  <SelectItem value="mother">Mother</SelectItem>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="sibling">Brother/Sister</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="relative">Relative</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium">Address *</Label>
              <Input placeholder="Enter complete address" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Phone Number *</Label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Email Address</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="contact@email.com" type="email" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center text-blue-800">
            <p className="text-sm">
              <strong>Note:</strong> Emergency contacts will only be contacted in case of medical emergencies 
              or critical situations. Please ensure the information provided is accurate and up-to-date.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyContacts;
