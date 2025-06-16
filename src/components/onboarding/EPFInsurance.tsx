
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, UploadIcon, ShieldIcon, CreditCardIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EPFInsuranceProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const EPFInsurance: React.FC<EPFInsuranceProps> = ({ formData, updateFormData }) => {
  const [epfJoiningDate, setEpfJoiningDate] = useState<Date>();
  const [insuranceDOB, setInsuranceDOB] = useState<Date>();
  const [parentalInsurance, setParentalInsurance] = useState(false);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="epf" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="epf">EPF Declaration</TabsTrigger>
          <TabsTrigger value="insurance">Insurance Details</TabsTrigger>
        </TabsList>

        <TabsContent value="epf" className="space-y-4">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <CreditCardIcon className="w-5 h-5 mr-2" />
                Employee Provident Fund (EPF) Declaration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">UAN Number</Label>
                  <Input placeholder="Universal Account Number" />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">EPF Number</Label>
                  <Input placeholder="Previous EPF Account Number" />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Date of Joining (First Job)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !epfJoiningDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {epfJoiningDate ? format(epfJoiningDate, "PP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={epfJoiningDate}
                        onSelect={setEpfJoiningDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-medium">EPF Status</Label>
                <RadioGroup defaultValue="new" className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="existing" id="existing" />
                    <Label htmlFor="existing">Existing EPF Member (I have UAN/EPF account)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">New EPF Member (First job/No previous EPF)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="opt15000" id="opt15000" />
                    <Label htmlFor="opt15000">Want to opt for ₹15,000 salary slab (Lower contribution)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Upload Form-11 (Pre-filled PDF)</Label>
                <div className="border-2 border-dashed border-green-300 rounded-lg p-4">
                  <div className="text-center">
                    <UploadIcon className="mx-auto h-8 w-8 text-green-400" />
                    <div className="mt-2">
                      <Label htmlFor="form11-upload" className="cursor-pointer">
                        <span className="text-sm font-medium text-green-900">
                          Click to upload Form-11
                        </span>
                        <span className="block text-xs text-green-600 mt-1">
                          PDF file up to 5MB
                        </span>
                      </Label>
                      <Input
                        id="form11-upload"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insurance" className="space-y-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <ShieldIcon className="w-5 h-5 mr-2" />
                Insurance Declaration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Date of Birth</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !insuranceDOB && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {insuranceDOB ? format(insuranceDOB, "PP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={insuranceDOB}
                          onSelect={setInsuranceDOB}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Employee ID</Label>
                    <Input placeholder="Employee identification number" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Nominee Name</Label>
                    <Input placeholder="Primary nominee name" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Nominee Relationship</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Family Details */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Family Details for Insurance</h4>
                
                {/* Spouse Details */}
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium mb-3">Spouse Information</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Spouse Name</Label>
                      <Input placeholder="Enter spouse name" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Spouse Aadhaar</Label>
                      <Input placeholder="Spouse Aadhaar number" />
                    </div>
                  </div>
                </div>

                {/* Children Details */}
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium mb-3">Children Information</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Number of Children</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4+">4 or more</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Child 1 Aadhaar (if applicable)</Label>
                      <Input placeholder="Child's Aadhaar number" />
                    </div>
                  </div>
                </div>

                {/* Parents Details */}
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium mb-3">Parents Information</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Father's Aadhaar</Label>
                      <Input placeholder="Father's Aadhaar number" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Mother's Aadhaar</Label>
                      <Input placeholder="Mother's Aadhaar number" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Parental Insurance Option */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="parentalInsurance"
                    checked={parentalInsurance}
                    onCheckedChange={(checked) => setParentalInsurance(checked as boolean)}
                  />
                  <Label htmlFor="parentalInsurance" className="text-sm font-medium">
                    I want to opt for Parental Insurance coverage
                  </Label>
                </div>
                {parentalInsurance && (
                  <div className="bg-yellow-50 p-4 rounded-lg border-yellow-200 border">
                    <p className="text-sm text-yellow-800">
                      Additional premium will be deducted from your salary for parental insurance coverage.
                    </p>
                  </div>
                )}
              </div>

              {/* Salary Details */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Salary Details for Premium Calculation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Basic Salary</Label>
                    <Input placeholder="Enter basic salary amount" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Total CTC</Label>
                    <Input placeholder="Enter total CTC amount" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EPFInsurance;
