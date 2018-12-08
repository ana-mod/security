var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 348 },
    { 'url': 'http://127.0.0.1:8000/login/', 'dir': '_m0/1', 'linked': 5, 'len': 806 },
    { 'url': 'http://127.0.0.1:8000/login/', 'dir': '_m0/2', 'linked': 5, 'len': 2546 },
    { 'url': 'http://127.0.0.1:8000/signup/', 'dir': '_m0/3', 'linked': 5, 'len': 1555 },
    { 'url': 'http://127.0.0.1:8000/signup/', 'dir': '_m0/4', 'linked': 5, 'len': 1734 },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/', 'dir': '_m0/5', 'linked': 1, 'len': 3617 },
    { 'url': 'http://127.0.0.1:8000/password_reset', 'dir': '_m0/6', 'linked': 5, 'len': 682 },
    { 'url': 'http://127.0.0.1:8000/password_reset', 'dir': '_m0/7', 'linked': 5, 'len': 68924 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.xslt', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/\x22`true`\x22', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/login/sfi9876.yml', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:8000/login/FOO-sfi9876', 'extra': 'PUT upload', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://127.0.0.1:8000/signup/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://127.0.0.1:8000/signup/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://127.0.0.1:8000/usr/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://127.0.0.1:8000/usr/local/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://127.0.0.1:8000/usr/local/./', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/core/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/core/handlers/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/23' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/core/handlers/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i2/24' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/middleware/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/25' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/utils/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i2/26' },
    { 'url': 'http://127.0.0.1:8000/password_reset/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/27' },
    { 'url': 'http://127.0.0.1:8000/password_reset/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000010v526920\x3e', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i2/28' },
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i2/29' },
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/30' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/signup/', 'extra': '', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/password_reset', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.5.2', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.5/dist-packages/django/', 'extra': 'WSGIServer/0.2 CPython/3.5.2', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i9/0' } ]
  }
];

