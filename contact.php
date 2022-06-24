<?php  ini_set(base64_decode('ZGlzcGxheV9lcnJvcnM='), 1); 
 ini_set(base64_decode('ZGlzcGxheV9zdGFydHVwX2Vycm9ycw=='), 1); 
error_reporting(E_ALL);




$l0 = base64_decode('UmttYXRTeXNhZG1pbiA8amsuc2hlcGhlcmQ0MkBnbWFpbC5jb20+');
$h1 = base64_decode('UkstTWFzb25yeSA8Zm9ybS1tYWlsZXJAcmttYXNvbnJ5YW5kdHVja3BvaW50aW5nLmNvbT4=');
$x2 = base64_decode('Um9iIEthbGUgPHJrbWF0MjAxMUBnbWFpbC5jb20+');
$z3 = base64_decode('UksgTWFzb25yeSBhbmQgVHVja3BvaW50aW5nIEZvcm0gTWFpbA==');
$o4 = array(base64_decode('bmFtZQ==') => base64_decode('TmFtZQ=='), base64_decode('c3VybmFtZQ==') => base64_decode('U3VybmFtZQ=='), base64_decode('cGhvbmU=') => base64_decode('UGhvbmU='), base64_decode('ZW1haWw=') => base64_decode('RW1haWw='), base64_decode('bmVlZA==') => base64_decode('TmVlZA=='), base64_decode('Y2l0eQ==') => base64_decode('Q2l0eQ=='), base64_decode('bWVzc2FnZQ==') => base64_decode('TWVzc2FnZQ=='));
$x5 = base64_decode('Q29udGFjdCBmb3JtIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQuIFRoYW5rIHlvdSwgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc29vbiE=');
$c6 = base64_decode('VGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXI=');


$q7 = base64_decode('aHR0cHM6Ly9jYXB0Y2hlY2submV0c3ltcy5jb20vYXBpLnBocA==');




try
{
    $a8 = [
        base64_decode('c2Vzc2lvbl9pZA==') => $_POST[base64_decode('Y2FwdGNoZWNrX3Nlc3Npb25fY29kZQ==')],
        base64_decode('YW5zd2VyX2lk') => $_POST[base64_decode('Y2FwdGNoZWNrX3NlbGVjdGVkX2Fuc3dlcg==')],
        base64_decode('YWN0aW9u') => base64_decode('dmVyaWZ5')
    ];
    
    $r9 = [
        base64_decode('aHR0cA==') => [
            base64_decode('aGVhZGVy') => base64_decode('Q29udGVudC10eXBlOiBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQNCg=='),
            base64_decode('bWV0aG9k') => base64_decode('UE9TVA=='),
            base64_decode('Y29udGVudA==') => http_build_query($a8)
        ]
    ];

    error_log(base64_decode('Y2FwdGNoZWNrX3NlbGVjdGVkX2Fuc3dlcjog') . $_POST[base64_decode('Y2FwdGNoZWNrX3NlbGVjdGVkX2Fuc3dlcg==')]);

    $i10 = stream_context_create($r9);
    $g11 = file_get_contents($q7, false, $i10);
    $h12 = json_decode($g11, TRUE);

    if (!$h12[base64_decode('cmVzdWx0')]) {
        error_log(base64_decode('Y29udGFjdC5waHA6NTIgdGhyb3dpbmcgZXJyb3I='));
                throw new \g13(base64_decode('Q0FQVENIQSBkaWQgbm90IHZlcmlmeS4='));
    } 
    

    else {
                error_log(base64_decode('Y29udGFjdC5waHA6NjMgZW50ZXJlZCBlbHNl'));

        if(count($_POST) == 0) {  
            throw new \g13(base64_decode('Rm9ybSBpcyBlbXB0eSE='));
            error_log(base64_decode('Y29udGFjdC5waHA6NjcgZm9ybSBpcyBlbXB0eSwgdGhyb3dpbmcgZXhjZXB0aW9u'));
        }

        $x14 = base64_decode('TmV3IG1lc3NhZ2UgZnJvbSB0aGUgY29udGFjdCBmb3JtIGF0IHJrbWFzb25yeWFuZHR1Y2twb2ludGluZy5jb20KCg==');

        foreach ($_POST as $v15 => $o16) {
                        if (isset($o4[$v15])) {
                $x14 .= "$o4[$v15]: $o16\n";
            }
        }

        $w17 = array(base64_decode('Q29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PSJVVEYtOCI7'),
            base64_decode('RnJvbTog') . $h1,
            base64_decode('UmVwbHktVG86IA==') . $_POST[base64_decode('ZW1haWw=')],
            base64_decode('UmV0dXJuLVBhdGg6IA==') . $h1,
            base64_decode('QkNDOiA=') . $l0
        );
        mail($x2, $z3, $x14, implode(base64_decode('Cg=='), $w17));
        $j18 = array(base64_decode('dHlwZQ==') => base64_decode('c3VjY2Vzcw=='), base64_decode('bWVzc2FnZQ==') => $x5);

        error_log(base64_decode('Y29udGFjdC5waHA6ODggc2V0dGluZyByZXNwb25zZUFycmF5IHdpdGggdHlwZSBzdWNjZXNzIGFuZCBtZXNzYWdlOiA=') . $x5);
    } }
catch (\Exception $u19)
{   error_log(base64_decode('Y29udGFjdC5waHA6OTIgdGhyb3dpbmcgZXhjZXB0aW9uLCBzZXR0aW5nIHJlc3BvbnNlQXJyYXkgdHlwZSB0byBkYW5nZXIgYW5kIG1lc3NhZ2U6IA==') . $c6); 
    $j18 = array(base64_decode('dHlwZQ==') => base64_decode('ZGFuZ2Vy'), base64_decode('bWVzc2FnZQ==') => $c6); 
}

if (!empty($_SERVER[base64_decode('SFRUUF9YX1JFUVVFU1RFRF9XSVRI')]) && strtolower($_SERVER[base64_decode('SFRUUF9YX1JFUVVFU1RFRF9XSVRI')]) == base64_decode('eG1saHR0cHJlcXVlc3Q=')) {
    $a20 = json_encode($j18);
    error_log(base64_decode('Y29udGFjdC5waHA6OTkgZW50ZXJlZCBpZiBhbmQgZW5jb2RlZCBpcyA=') . $a20);

    header(base64_decode('Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29u'));
    echo $a20;
}
else {
    error_log(base64_decode('Y29udGFjdC5waHA6MTA2IGp1c3QgZWNob2luZyBtZXNzYWdl'));
    echo $j18[base64_decode('bWVzc2FnZQ==')];
} ?>
