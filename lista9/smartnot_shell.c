#include <unistd.h>
#include <stdio.h>

char shellcode[]=
    "\xe9\x1e\x00\x00\x00"  //          jmp    8048083 <MESSAGE>
    "\xb8\x04\x00\x00\x00"  //          mov    $0x4,%eax
    "\xbb\x01\x00\x00\x00"  //          mov    $0x1,%ebx
    "\x59"                  //          pop    %ecx
    "\xba\x0f\x00\x00\x00"  //          mov    $0xf,%edx
    "\xcd\x80"              //          int    $0x80
    "\xb8\x01\x00\x00\x00"  //          mov    $0x1,%eax
    "\xbb\x00\x00\x00\x00"  //          mov    $0x0,%ebx
    "\xcd\x80"              //          int    $0x80
    "\xe8\xdd\xff\xff\xff"  //          call   8048065 <GOBACK>
"236642\n";
int main()
{
    int *ret;
    ret = (int *)&ret + 2;
    (*ret) = (int)shellcode;
}
