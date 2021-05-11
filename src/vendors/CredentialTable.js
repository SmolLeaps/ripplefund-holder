import React, {useState, useEffect} from 'react';
import { Button, Table } from 'react-bootstrap'
import {ShareCredential} from '../containers/ShareCredential.js'
const CredentialTable = ({ credentials }) => {
    const [vcData, setVCData] = useState([]);
    
    useEffect(() => {
      const removeProp = (obj, propToDelete) => {
        for (let property in obj) {
          if (obj.hasOwnProperty(property)) {
            if (property === propToDelete) {
              delete obj[property];
            } else if (typeof obj[property] == "object") {
              removeProp(obj[property], propToDelete);
            }
          }
        }
        return obj
      }

      const initialiseVCData = (vcData) => {
        let processedVCData = []
        for (let vc in vcData) {
          processedVCData[vc] = vcData[vc].credential.credentialSubject.data
          processedVCData[vc] = removeProp(processedVCData[vc], '@type')
        }
        return processedVCData
      }

      setVCData(initialiseVCData(credentials))
    }, [credentials])

    const extractEmailFromIDDocument = (cred) => {
      if (cred.hasIDDocument){
        return JSON.parse(cred.hasIDDocument.hasIDDocument.idClass).email
      } else {
        return null
      }
    }

    return <div>
        <Table bordered>
              <thead className="thead-light">
                <tr>
                  <th>Index</th>
                  <th>Registered Company Name</th>
                  <th>Email</th>
                  <th>VC Type</th>
                </tr>
              </thead>
              <tbody>
                {
                  vcData.map((cred, index) => {
                    return (
                      <tr key={index+1}>
                        <th scope='row'>{index+1}</th>
                        <td>{cred.givenName || cred.name}</td>
                        <td>{cred.email || extractEmailFromIDDocument(cred) || '' }</td>
                        <td>{cred.hasIDDocument ?  cred.hasIDDocument.hasIDDocument.documentType : 'ID Document'}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3001/share-credentials?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MjA0NzAyNDUwMDAsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiNDAyNTg4MDU4Yjg3ZWMyYiIsImlzcyI6ImRpZDplbGVtOkVpQTJ3VVp4dWFLRTM3QjhuOFNNMklXSXFmLWZiMDhleVF3bEJzVkVuUTZrb0E7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZWxsVVNtcFpNbFpxV1ZkS2FVNUhSVEZOVkZsNFdXcEpNVmxVVVROYVJGVXlXV3BhYUZscVpHaFpWMWw1V1ZSRmVrOVhWbTFaZWxFeVRqSldhMDVVVlhkWmFrVXlUa2RSZUUxVVRtaE5lbFUwV1hwbk5FNURTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUVEpKTkZwVVRteGFiVXBzVG5wT2EwOVVaR2hhYW1Sc1RtcEJNVmx0VG14UFZFbDNUMFJyTlU1dFdUVlpha0Y0VFcxV2FFNTZRVEJOYWtGNFdXcHNhMDB5Vm0xTlIwMTVUMFJLYkU1Nll6Vk5SMUV5VGpKWmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lWVlJWZUdGRWJsZGFkR04xZFhCbk9XeE1SbGhzTW1wVlJsbE5jMWRVYkc5NlkyUkJjMDlJUlcxYVVuZE1SRVpxVTJRMldHdDJSSGh1V0ZrNGVIUk9RWFJJTTBKblZrdE1aazg0V2pGcGQyY3daSGxTVkZFaWZRI3ByaW1hcnkifQ.dca7ea98170f5df1df95cca5f901e34ad13de22f71db0e0480b90784f7eabd7a258f425738555c751fbf185b3f9250f5e1f07c105050f296dbc857c2b576ef3e';
      }}>Share Credentials</Button>
    </div>
}

export default CredentialTable;