
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ContactAddressProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const ContactAddress: React.FC<ContactAddressProps> = ({ formData, updateFormData }) => {
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
  const [stayFrom, setStayFrom] = useState<Date>();
  const [stayTo, setStayTo] = useState<Date>();

  return (
    <div className="space-y-8">
      {/* Current Address */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Current Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="currentAddress" className="text-sm font-medium">Address *</Label>
            <Input
              id="currentAddress"
              placeholder="Enter complete address"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentLandmark" className="text-sm font-medium">Landmark</Label>
            <Input
              id="currentLandmark"
              placeholder="Nearby landmark"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentCity" className="text-sm font-medium">City *</Label>
            <Input
              id="currentCity"
              placeholder="Enter city"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentState" className="text-sm font-medium">State *</Label>
            <Input
              id="currentState"
              placeholder="Enter state"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentPincode" className="text-sm font-medium">Pincode *</Label>
            <Input
              id="currentPincode"
              placeholder="123456"
              className="w-full"
              maxLength={6}
            />
          </div>

          {/* Duration of Stay */}
          <div className="md:col-span-2">
            <Label className="text-sm font-medium mb-2 block">Duration of Stay</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">From</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !stayFrom && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {stayFrom ? format(stayFrom, "PP") : "From date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={stayFrom}
                      onSelect={setStayFrom}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">To (Current)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !stayTo && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {stayTo ? format(stayTo, "PP") : "To date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={stayTo}
                      onSelect={setStayTo}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-2">
            <Label htmlFor="mobileNumber" className="text-sm font-medium">Mobile Number *</Label>
            <Input
              id="mobileNumber"
              placeholder="+91 98765 43210"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="homePhone" className="text-sm font-medium">Home Phone</Label>
            <Input
              id="homePhone"
              placeholder="011-12345678"
              className="w-full"
            />
          </div>

          {/* Neighbor Details */}
          <div className="space-y-2">
            <Label htmlFor="neighborName" className="text-sm font-medium">Neighbor Name</Label>
            <Input
              id="neighborName"
              placeholder="Neighbor's name (optional)"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="neighborContact" className="text-sm font-medium">Neighbor Contact</Label>
            <Input
              id="neighborContact"
              placeholder="Neighbor's contact (optional)"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Permanent Address */}
      <div className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-green-900">Permanent Address</h3>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sameAddress"
              checked={sameAsCurrent}
              onCheckedChange={(checked) => setSameAsCurrent(checked as boolean)}
            />
            <Label htmlFor="sameAddress" className="text-sm font-medium">
              Same as current address
            </Label>
          </div>
        </div>

        {!sameAsCurrent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="permanentAddress" className="text-sm font-medium">Address *</Label>
              <Input
                id="permanentAddress"
                placeholder="Enter complete address"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentLandmark" className="text-sm font-medium">Landmark</Label>
              <Input
                id="permanentLandmark"
                placeholder="Nearby landmark"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentCity" className="text-sm font-medium">City *</Label>
              <Input
                id="permanentCity"
                placeholder="Enter city"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentState" className="text-sm font-medium">State *</Label>
              <Input
                id="permanentState"
                placeholder="Enter state"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentPincode" className="text-sm font-medium">Pincode *</Label>
              <Input
                id="permanentPincode"
                placeholder="123456"
                className="w-full"
                maxLength={6}
              />
            </div>
          </div>
        )}

        {sameAsCurrent && (
          <div className="text-center py-8 text-gray-600">
            <p>Permanent address will be copied from current address</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAddress;
