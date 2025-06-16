
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

interface EmploymentHistoryProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const EmploymentHistory: React.FC<EmploymentHistoryProps> = ({ formData, updateFormData }) => {
  const [currentJobFrom, setCurrentJobFrom] = useState<Date>();
  const [currentJobTo, setCurrentJobTo] = useState<Date>();
  const [previousJobFrom, setPreviousJobFrom] = useState<Date>();
  const [previousJobTo, setPreviousJobTo] = useState<Date>();

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Employment History</h3>
        <p className="text-sm text-gray-600">Please provide details for your current and previous employment</p>
      </div>

      <Accordion type="single" collapsible defaultValue="current" className="w-full">
        {/* Current/Most Recent Employment */}
        <AccordionItem value="current">
          <AccordionTrigger className="text-base font-semibold">
            Current/Most Recent Employment
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Company Name *</Label>
                    <Input placeholder="Enter company name" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Department *</Label>
                    <Input placeholder="Enter department" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Designation *</Label>
                    <Input placeholder="Enter your designation" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Employee Code</Label>
                    <Input placeholder="Enter employee code" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Reporting Manager Name</Label>
                    <Input placeholder="Enter manager's name" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Manager Contact</Label>
                    <Input placeholder="Manager's contact number" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">From Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !currentJobFrom && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {currentJobFrom ? format(currentJobFrom, "PP") : "From date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={currentJobFrom}
                          onSelect={setCurrentJobFrom}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">To Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !currentJobTo && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {currentJobTo ? format(currentJobTo, "PP") : "Current/To date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={currentJobTo}
                          onSelect={setCurrentJobTo}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-sm font-medium">Office Address</Label>
                    <Input placeholder="Enter complete office address" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Office Contact</Label>
                    <Input placeholder="Office contact number" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Company Website</Label>
                    <Input placeholder="www.company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">CTC (Annual)</Label>
                    <Input placeholder="Enter annual CTC" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Take Home (Monthly)</Label>
                    <Input placeholder="Enter monthly take home" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Nature of Employment</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                        <SelectItem value="contractual">Contractual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Reason for Leaving</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="career-growth">Career Growth</SelectItem>
                        <SelectItem value="better-opportunity">Better Opportunity</SelectItem>
                        <SelectItem value="relocation">Relocation</SelectItem>
                        <SelectItem value="salary">Better Salary</SelectItem>
                        <SelectItem value="work-culture">Work Culture</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <Label className="text-sm font-medium">Consent to Contact Employer</Label>
                    <RadioGroup defaultValue="yes" className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="contact-yes" />
                        <Label htmlFor="contact-yes">Yes, you may contact</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="contact-no" />
                        <Label htmlFor="contact-no">No, please do not contact</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Previous Employment */}
        <AccordionItem value="previous">
          <AccordionTrigger className="text-base font-semibold">
            Previous Employment (Optional)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Company Name</Label>
                    <Input placeholder="Enter previous company name" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Department</Label>
                    <Input placeholder="Enter department" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Designation</Label>
                    <Input placeholder="Enter your designation" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Employee Code</Label>
                    <Input placeholder="Enter employee code" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">From Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !previousJobFrom && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {previousJobFrom ? format(previousJobFrom, "PP") : "From date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={previousJobFrom}
                          onSelect={setPreviousJobFrom}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">To Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !previousJobTo && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {previousJobTo ? format(previousJobTo, "PP") : "To date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={previousJobTo}
                          onSelect={setPreviousJobTo}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">CTC (Annual)</Label>
                    <Input placeholder="Enter annual CTC" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Reason for Leaving</Label>
                    <Input placeholder="Enter reason for leaving" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default EmploymentHistory;
