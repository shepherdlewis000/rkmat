<?php $u0=base64_decode('UmttYXRTeXNhZG1pbiA8amsuc2hlcGhlcmQ0Mitya21hdEBnbWFpbC5jb20+');$a1=base64_decode('UkstTWFzb25yeSA8Zm9ybS1tYWlsZXJAcmttYXNvbnJ5YW5kdHVja3BvaW50aW5nLmNvbT4=');$a2=base64_decode('Um9iIEthbGUgPHJrbWF0MjAxMUBnbWFpbC5jb20+');$b3=base64_decode('UksgTWFzb25yeSBhbmQgVHVja3BvaW50aW5nIEZvcm0gTWFpbA==');$n4=array(base64_decode('bmFtZQ==')=>base64_decode('TmFtZQ=='),base64_decode('c3VybmFtZQ==')=>base64_decode('U3VybmFtZQ=='),base64_decode('cGhvbmU=')=>base64_decode('UGhvbmU='),base64_decode('ZW1haWw=')=>base64_decode('RW1haWw='),base64_decode('bmVlZA==')=>base64_decode('TmVlZA=='),base64_decode('Y2l0eQ==')=>base64_decode('Q2l0eQ=='),base64_decode('bWVzc2FnZQ==')=>base64_decode('TWVzc2FnZQ=='));$v5=base64_decode('Q29udGFjdCBmb3JtIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQuIFRoYW5rIHlvdSwgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc29vbiE=');$w6=base64_decode('VGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXI=');$b7=base64_decode('aHR0cHM6Ly9jYXB0Y2hlY2submV0c3ltcy5jb20vYXBpLnBocA==');try{$c8=[base64_decode('c2Vzc2lvbl9pZA==')=>$_POST[base64_decode('Y2FwdGNoZWNrX3Nlc3Npb25fY29kZQ==')],base64_decode('YW5zd2VyX2lk')=>$_POST[base64_decode('Y2FwdGNoZWNrX3NlbGVjdGVkX2Fuc3dlcg==')],base64_decode('YWN0aW9u')=>base64_decode('dmVyaWZ5')];$p9=[base64_decode('aHR0cA==')=>[base64_decode('aGVhZGVy')=>base64_decode('Q29udGVudC10eXBlOiBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQNCg=='),base64_decode('bWV0aG9k')=>base64_decode('UE9TVA=='),base64_decode('Y29udGVudA==')=>http_build_query($c8)]];$n10=stream_context_create($p9);$o11=file_get_contents($b7,false,$n10);$n12=json_decode($o11,TRUE);if(!$n12[base64_decode('cmVzdWx0')]){throw new \Exception(base64_decode('Q0FQVENIQSBkaWQgbm90IHZlcmlmeTog').$n12[base64_decode('bXNn')]);}elseif(!isset($q13[base64_decode('Y2FwdGNoZWNrX3NlbGVjdGVkX2Fuc3dlcg==')])){throw new \Exception(base64_decode('Tm8gY2FwdGNoZWNrIHNlbGVjdGVkOiA=').$n12[base64_decode('bXNn')]);}else{if(count($_POST)==0)throw new \Exception(base64_decode('Rm9ybSBpcyBlbXB0eSE='));$f14=base64_decode('TmV3IG1lc3NhZ2UgZnJvbSB0aGUgY29udGFjdCBmb3JtIGF0IHJrbWFzb25yeWFuZHR1Y2twb2ludGluZy5jb20KCg==');foreach($_POST as $p15=>$f16){if(isset($n4[$p15])){$f14.="$n4[$p15]: $f16\n";}}$s17=array(base64_decode('Q29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PSJVVEYtOCI7'),base64_decode('RnJvbTog').$a1,base64_decode('UmVwbHktVG86IA==').$_POST[base64_decode('ZW1haWw=')],base64_decode('UmV0dXJuLVBhdGg6IA==').$a1,base64_decode('QkNDOiA=').$u0);mail($a2,$b3,$f14,implode(base64_decode('Cg=='),$s17));$v18=array(base64_decode('dHlwZQ==')=>base64_decode('c3VjY2Vzcw=='),base64_decode('bWVzc2FnZQ==')=>$v5);}}catch(\Exception $a19){$v18=array(base64_decode('dHlwZQ==')=>base64_decode('ZGFuZ2Vy'),base64_decode('bWVzc2FnZQ==')=>$w6);}if(!empty($_SERVER[base64_decode('SFRUUF9YX1JFUVVFU1RFRF9XSVRI')])&&strtolower($_SERVER[base64_decode('SFRUUF9YX1JFUVVFU1RFRF9XSVRI')])==base64_decode('eG1saHR0cHJlcXVlc3Q=')){$b20=json_encode($v18);header(base64_decode('Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29u'));echo $b20;}else{echo $v18[base64_decode('bWVzc2FnZQ==')];}?>